/// <reference path="../../typings/tsd.d.ts" />

import {Message} from './message';
import {Room} from './room';

/**
 * Chatwork 記法を HTML にするやつ
 */
export class DocumentFormatter {
  
  constructor(private message: Message, private room: Room) {
  }
  
  format(): string {
    var html = this.message.body;
    html = html.replace(/&/g, '&amp;');
    html = html.replace(/</g, '&lt;');
    html = html.replace(/>/g, '&gt;');
    html = html.replace(/\r?\n/g, '<br />');
    return this.parseChatworkDocument(html);
  }

  private parseChatworkDocument(raw: string): string {
    // TODO: いい感じに
    raw = this.parseChatworkDocumentCode(raw);
    raw = this.parseChatworkDocumentInfo(raw);
    raw = this.parseChatworkDocumentQuote(raw);
    raw = this.parseChatworkDocumentTo(raw);
    raw = this.parseChatworkDocumentReply(raw);
    raw = this.parseChatworkDocumentPicon(raw);
    raw = this.parseChatworkDocumentPiconame(raw);
    raw = this.parseChatworkDocumentPreview(raw);
    raw = this.parseChatworkDocumentHr(raw);
    raw = this.parseChatworkDocumentDeleted(raw);
    raw = this.parseChatworkDocumentDtext(raw);
    return raw;
  }
  
  // [code]...[/code]
  private parseChatworkDocumentCode(raw: string): string {
    // バグなのかわかんないけど、 
    // [code]Code sample: [code]a code... [/code] [/code]
    // の場合、 `Code smaple: [code]a code... ` [/code] になるから、普通に置き換えでいけるっぽい。
    var position = 0;
    while(raw.indexOf('[code]', position) >= 0) {
      var first = raw.indexOf('[code]');
      var end = raw.indexOf('[/code]', first);
      if(end < 0) {
        break;
      }
      var f = raw.substr(0, first);
      var c = raw.substring(first + 6, end);
      c = c.replace(/\[code\]/g, '&#x5b;code&#x5d;');
      var e = raw.substr(end + 7);
      raw = f + '<code>' + c + '</code>' + e;
      position = end;
    }
    return raw;
  }
  
  // [info]hoge[/info], [info][title]foo[/title]bar[/info], [info][title]foo[/title][download:{file_id}]...[/download][/info]
  private parseChatworkDocumentInfo(raw: string): string {
    var regex = new RegExp('\\[info\\](.*)?\\[/info\\]');
    while(regex.test(raw)) {
      var match = regex.exec(raw);
      var html = '';
      var title = '', task = '', text = '';
      if(match[1].indexOf('[title]') >= 0) {
        var match1 = new RegExp('\\[title\\](.*)?\\[/title\\]').exec(raw);
        title = '<div class="ui top attached header">' + match1[1] + '</div>'; 
        match[1] = match[1].replace(match1[0], '');
      }
      if(match[1].indexOf('[download') >= 0) {
        var match2 = new RegExp('\\[download:([0-9]+)\\](.*)?\\[/download\\]').exec(raw);
        text = '<div class="ui attached segment">';
        text += '<a href="#" onClick="openLink(\'https://www.chatwork.com/gateway.php?cmd=download_file&bin=1&file_id=' + match2[1] + '\');">';
        text += match2[2] + '</div>';
        match[1] = match[1].replace(match2[0], '');
      } 
      else if(match[1].indexOf('[task') >= 0) {
        var match3 = new RegExp('\\[task aid=([0-9,]+) st=(.*) lt=([0-9]+)\\](.*)?\\[/task\\]').exec(raw);
        var clas = 'ui bottom attached segment';
        text = '<div class="ui attached segment">' + match3[4] + '</div>';
        if(match3[2] == 'done') {
          clas += ' secondary';
        }
        var date = new Date(+match3[3] * 1000).toLocaleDateString() + 'まで';
        if(+match3[3] == 0) {
          date = '未設定';
        }
        task = '<div class="' + clas + '">期限:' + date + '</div>';
        match[1] = match[1].replace(match3[0], '');
      } else {
        text = '<div class="ui attached segment">' + match[1] + '</div>';
      }
      html += title;
      html += text;
      html += task;
      raw = raw.replace(regex, html);
    }
    return raw;
  }
  
  // [qt][qtmeta aid={account_id} time={timestamp}]...[/qt], [qt][qtmeta aid={account_id}]...[/qt]
  private parseChatworkDocumentQuote(raw: string): string {
    var regex = new RegExp('\\[qt\\](.*)?\\[/qt\\]');
    while(regex.test(raw)) {
      var match = regex.exec(raw);
      var html = '<blockquote>', cite = '';
      if(match[0].indexOf('[qtmeta') >= 0) {
        var match1 = new RegExp('\\[qtmeta aid=([0-9]+)?( time=([0-9]+)?)?\\]').exec(raw);
        var name = '';
        this.room.members.some((w) => {
          if(w.userId == +match1[1]) {
            name = w.name;
            return true;
          }
          return false;
        });
        cite = '<br><cite>' + name;
        if(match1[3] != null) {
          cite += ' - ' + new Date(+match1[3] * 1000).toLocaleDateString();
        }
        cite += '</cite>'; 
        match[1] = match[1].replace(match1[0], '');
      }
      html += match[1] + cite + '</blockquote>';
      raw = raw.replace(regex, html);
    }
    return raw;
  }
  
  // [To:{account_id}]
  private parseChatworkDocumentTo(raw: string): string {
    return raw;
  }
  
  // [rp aid={account_id} to={room_id}-{message_id}]
  private parseChatworkDocumentReply(raw: string): string {
    return raw;
  }
  
  // [picon:{account_id}]
  private parseChatworkDocumentPicon(raw: string): string {
    var regex = new RegExp('\\[picon:([0-9]+)\\]');
    while(regex.test(raw)) {
      var match = regex.exec(raw);
      var icon:string = '';
      this.room.members.some((w) => {
        if(w.userId == +match[1]) {
          icon = w.avatarImageUrl;
          return true;
        }
        return false;
      });
      
      raw = raw.replace(match[0], '<img class="picon" src="' + icon + '">');
    }
    return raw;
  }
  
  // [piconname:{account_id}]
  private parseChatworkDocumentPiconame(raw: string): string {
    var regex = new RegExp('\\[piconname:([0-9]+)\\]');
    while(regex.test(raw)) {
      var match = regex.exec(raw);
      var icon:string = ''
      var name:string = '';
      this.room.members.some((w) => {
        if(w.userId == +match[1]) {
          icon = w.avatarImageUrl;
          name = w.name;
          return true;
        }
        return false;
      });
      var html = '<img class="picon" src="' + icon + '">';
      html += '<span>' + name + '</span>';
      raw = raw.replace(match[0], html);
    }
    return raw;
  }
    
  // [preview id=****** ht=150]
  private parseChatworkDocumentPreview(raw: string): string {
    return raw;
  }
  
  // [hr]
  private parseChatworkDocumentHr(raw: string): string {
    return raw.replace(/\[hr\]/g, '<hr />');
  }
  
  // [deleted]
  private parseChatworkDocumentDeleted(raw: string): string {
    return raw.replace(/\[deleted\]/g, '<i>Deleted message</i>');
  };
  
  private texts = {
    'chatroom_added'             : '」を追加しました。',
    'chatroom_chatname_is'       : 'チャット名を「',
    'chatroom_chat_edited'       : 'チャット情報を変更しました。',
    'chatroom_contact_added'     : 'コンタクトを追加しました。',
    'chatroom_description_is'    : '概要を「',
    'chatroom_groupchat_created' : '新しくグループチャットを作成しました。', 
    'chatroom_icon_updated'      : 'グループチャットのアイコンを変更しました。',
    'chatroom_member_is'         : 'メンバー「',
    'chatroom_mychat_created'    : 'マイチャットを作成しました。',
    'chatroom_set'               : '」に設定しました。',
    'file_edited'                : 'ファイル名を編集しました。',
    'file_uploaded'              : 'ファイルをアップロードしました。',
    'task_added'                 : 'タスクを追加しました。',
    'task_done'                  : 'タスクを完了しました。',
    'task_edited'                : 'タスクを編集しました。'
  };
  
  // [dtext:~~]
  private parseChatworkDocumentDtext(raw: string): string {
    for(var prop in this.texts) {
      raw = raw.replace(new RegExp('\\[dtext:' + prop + '\\]', 'g'), this.texts[prop]);
    }
    return raw;
  }
  
  private insert(obj: string, idx: number, s: string): string {
    return (obj.slice(0, idx) + s + obj.slice(idx + Math.abs(0)));
  }
}