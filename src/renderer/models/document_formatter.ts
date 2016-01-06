/// <reference path="../../typings/tsd.d.ts" />

import {Message} from './message';
import {Room} from './room';

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
    raw = this.parseChatworkDocumentTask(raw);
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
    return raw;
  }
  
  // [qt][qtmeta aid={account_id} time={timestamp}]...[/qt], [qt][qtmeta aid={account_id}]...[/qt]
  private parseChatworkDocumentQuote(raw: string): string {
    return raw;
  }
  
  // [task aid={account_id} st={status} lt={???}]...[/task]
  private parseChatworkDocumentTask(raw: string): string {
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