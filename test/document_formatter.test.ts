/// <reference path="../src/typings/tsd.d.ts" />

var should = require('should');

import {DocumentFormatter} from '../src/renderer/models/document_formatter';
import {Message} from '../src/renderer/models/message';
import {Room} from '../src/renderer/models/room';
import {User} from '../src/renderer/models/user';

// Pre
var user1 = {
  account_id: 1,
  name: 'Test1',
  avatar_image_url: 'avatar1.png'
};

var user2 = {
  account_id: 2,
  name: 'Test2',
  avatar_image_url: 'avatar2.png'
};

var room = new Room({
  room_id: 0,
  name: 'Test',
  icon_path: 'icon.png',
  unread_num: 0
});
room.members = [
  new User(user1),
  new User(user2)
];

describe('DocumentFormatter', () => {
  // ---------------------------------------------------------
  // case 01 - Plain text
  it('case 1.1 - plain', () => {
    var mes = new DocumentFormatter(createMessage(user1, 'Hello'), room).format('ja-jp');
    mes.should.equal('Hello');
  });

  it('case 1.2 - html', () => {
    var mes = new DocumentFormatter(createMessage(user1, '<b>Hello</b>'), room).format('ja-jp');
    mes.should.equal('&lt;b&gt;Hello&lt;/b&gt;');
  });

  // ---------------------------------------------------------
  // case 02 - Code 
  it('case 2.1 - code', () => {
    var mes = new DocumentFormatter(createMessage(user1, '[code]print("Hello, World!");[/code]'), room).format('ja-jp');
    mes.should.equal('<code>print("Hello,&nbsp;World!");</code>');
  });
  
  it('case 2.2 - code in code', () => {
    var mes = new DocumentFormatter(createMessage(user1, '[code]print("Hello, World!");[code][/code][/code]'), room).format('ja-jp');
    mes.should.equal('<code>print("Hello,&nbsp;World!");&#x5b;code&#x5d;</code>[/code]');
  });
  
  it('case 2.3 - code in code (dont has end tag)', () => {
    var mes = new DocumentFormatter(createMessage(user1, '[code]print("Hello, World!");[code][/code]'), room).format('ja-jp');
    mes.should.equal('<code>print("Hello,&nbsp;World!");&#x5b;code&#x5d;</code>');
  });
  
  // ---------------------------------------------------------
  // case 3 - info
  it('case 3.1 - info', () => {
    var mes = new DocumentFormatter(createMessage(user1, '[info][dtext:chatroom_contact_added][/info]'), room).format('ja-jp');
    mes.should.equal('<div class="ui attached segment">コンタクトを追加しました。</div>');
  });

  it('case 3.2 - info with task (set)', () => {
    var mes = new DocumentFormatter(createMessage(user1, '[info][title][dtext:task_done][/title][task aid=1607346 st=done lt=1454165999]Task Content[/task][/info]'), room).format('ja-jp');
    mes.should.equal('<div class="ui top attached header">タスクを完了しました。</div><div class="ui attached segment">Task Content</div><div class="ui bottom attached segment secondary">期限:2016-01-30まで</div>');
  });
  
  it('case 3.3 - info with task (unset)', () => {
    var mes = new DocumentFormatter(createMessage(user1, '[info][title][dtext:task_done][/title][task aid=1607346 st=done lt=0]Task Content[/task][/info]'), room).format('ja-jp');
    mes.should.equal('<div class="ui top attached header">タスクを完了しました。</div><div class="ui attached segment">Task Content</div><div class="ui bottom attached segment secondary">期限:未設定</div>');
  });
  
  it('case 3.4 - info with file', () => {
    var mes = new DocumentFormatter(createMessage(user1, '[info][title][dtext:file_uploaded][/title][download:67090163]file.zip (247.60 KB)[/download][/info]'), room).format('ja-jp');
    mes.should.equal('<div class="ui top attached header">ファイルをアップロードしました。</div><div class="ui attached segment"><a href="#" onClick="openLink(\'https://www.chatwork.com/gateway.php?cmd=download_file&bin=1&file_id=67090163\');">file.zip (247.60 KB)</div>');
  });
  
  // ---------------------------------------------------------
  // case 4 - quote
  it('case 4.1 - quote (user exist)', () => {
    var mes = new DocumentFormatter(createMessage(user1, '[qt][qtmeta aid=1 time=1452089287]test test test[/qt]'), room).format('ja-jp');
    mes.should.equal('<blockquote>test test test<br><cite>Test1 - 2016-01-06</cite></blockquote>');
  });

  it('case 4.1 - quote (user not exist)', () => {
    var mes = new DocumentFormatter(createMessage(user1, '[qt][qtmeta aid=10 time=1452089287]test test test[/qt]'), room).format('ja-jp');
    mes.should.equal('<blockquote>test test test<br><cite> - 2016-01-06</cite></blockquote>');
  });
  
  // ---------------------------------------------------------
  // case 5 - to
  it('case 5.1 - to (exist)', () => {
    var mes = new DocumentFormatter(createMessage(user1, '[To:1]'), room).format('ja-jp');
    mes.should.equal('<div class="ui green horizontal tiny label">To</div><img class="picon" src="avatar1.png">');
  });

  it('case 5.2 - to (not exist)', () => {
    var mes = new DocumentFormatter(createMessage(user1, '[To:10]'), room).format('ja-jp');
    mes.should.equal('<div class="ui green horizontal tiny label">To</div><img class="picon" src="">');
  });

  // ---------------------------------------------------------
  // case 6 - reply
  it('case 6.1 - reply (exist)', () => {
    var mes = new DocumentFormatter(createMessage(user1, '[rp aid=1 to=41230372-1025725715] Mikazuki Fuyunoさん'), room).format('ja-jp');
    mes.should.equal('<div class="ui green horizontal tiny label"><i class="forward mail icon"></i>Re</div><img class="picon" src="avatar1.png"> Mikazuki Fuyunoさん');
  });

  it('case 6.2 - reply (not exist)', () => {
    var mes = new DocumentFormatter(createMessage(user1, '[rp aid=10 to=41230372-1025725715] Mikazuki Fuyunoさん'), room).format('ja-jp');
    mes.should.equal('<div class="ui green horizontal tiny label"><i class="forward mail icon"></i>Re</div><img class="picon" src=""> Mikazuki Fuyunoさん');
  });

  // ---------------------------------------------------------
  // case 7 - picon
  it('case 7.1 - picon (exist)', () => {
    var mes = new DocumentFormatter(createMessage(user1, '[picon:1]'), room).format('ja-jp');
    mes.should.equal('<img class="picon" src="avatar1.png">');
  });

  it('case 7.2 - picon (not exist)', () => {
    var mes = new DocumentFormatter(createMessage(user1, '[picon:10]'), room).format('ja-jp');
    mes.should.equal('<img class="picon" src="">');
  });
 
  // ---------------------------------------------------------
  // case 8 - piconname
  it('case 8.1 - piconname (exist)', () => {
    var mes = new DocumentFormatter(createMessage(user1, '[piconname:1]'), room).format('ja-jp');
    mes.should.equal('<img class="picon" src="avatar1.png"><span>Test1</span>');
  });

  it('case 8.2 - piconname (not exist)', () => {
    var mes = new DocumentFormatter(createMessage(user1, '[piconname:10]'), room).format('ja-jp');
    mes.should.equal('<img class="picon" src=""><span></span>');
  });

  // ---------------------------------------------------------
  // case 09 - preview
  it('case 11.1 - preview', () => {
    var mes = new DocumentFormatter(createMessage(user1, '[preview id=64242599 ht=26]'), room).format('ja-jp');
    mes.should.equal('<i>プレビューは利用できません: <a href="#" onClick="openLink(\'https://www.chatwork.com/gateway.php?cmd=download_file&bin=1&file_id=64242599\');">ダウンロードリンク</a></i>');
  });
  
  // ---------------------------------------------------------
  // case 10 - Horizontal Line
  it('case 10.1 - hr', () => {
    var mes = new DocumentFormatter(createMessage(user1, '[hr]'), room).format('ja-jp');
    mes.should.equal('<hr />');
  });
  
  // ---------------------------------------------------------
  // case 11 - Deleted Message
  it('case 11.1 - delete', () => {
    var mes = new DocumentFormatter(createMessage(user1, '[deleted]'), room).format('ja-jp');
    mes.should.equal('<i>削除されたメッセージ</i>');
  });

  // ---------------------------------------------------------
  // case 12 - Emoji
  it('case 12.1 - emoji part 1', () => {
    var mes = new DocumentFormatter(createMessage(user1, ':):(:D8-):o;);('), room).format('ja-jp');
    mes.should.equal('😃😔😄😎😳😉😢');
  });
  
  it('case 12.2 - emoji part 2', () => {
    var mes = new DocumentFormatter(createMessage(user1, '(sweat):|:*:p(blush):^)|-)'), room).format('ja-jp');
    mes.should.equal('😓😌😘😜😊😕😪');
  });
  
  it('case 12.2 - emoji part 3', () => {
    var mes = new DocumentFormatter(createMessage(user1, '(inlove)]:)(talk)(yawn)(puke)(emo)8-|'), room).format('ja-jp');
    mes.should.equal('😍(grin)🗣(yawn)(puke)(emo)🤓');
  });
  
  it('case 12.2 - emoji part 4', () => {
    var mes = new DocumentFormatter(createMessage(user1, ':#)(nod)(shake)(^^;)(whew)(clap)(bow)'), room).format('ja-jp');
    mes.should.equal('😬🆗🆖😅😥👏🙇');
  });
  
  it('case 12.2 - emoji part 5', () => {
    var mes = new DocumentFormatter(createMessage(user1, '(roger)(flex)(dance)(:/)(devil)(*)(h)'), room).format('ja-jp');
    mes.should.equal('🙋💪💃(:/)👿⭐💝');
  });
 
  // --------------------------------------------------------- 
  // case 13 - URL
  it('case 13.1 - domain only (http)', () => {
    var mes = new DocumentFormatter(createMessage(user1, 'http://example.com'), room).format('ja-jp');
    mes.should.equal('<a href="#" onClick="openLink(\'http://example.com\')" data-content="http://example.com" data-variation="very wide" class="jq-popup">example.com</a>');
  });
  
  it('case 13.2 - domain only (https)', () => {
    var mes = new DocumentFormatter(createMessage(user1, 'https://example.com'), room).format('ja-jp');
    mes.should.equal('<a href="#" onClick="openLink(\'https://example.com\')" data-content="https://example.com" data-variation="very wide" class="jq-popup">example.com</a>');
  });
  
  it('case 13.3 - domain + file (http)', () => {
    var mes = new DocumentFormatter(createMessage(user1, 'http://example.com/index.html'), room).format('ja-jp');
    mes.should.equal('<a href="#" onClick="openLink(\'http://example.com/index.html\')" data-content="http://example.com/index.html" data-variation="very wide" class="jq-popup">example.com</a>');
  });
  
  it('case 13.4 - domain + file (https)', () => {
    var mes = new DocumentFormatter(createMessage(user1, 'https://example.com/index.html'), room).format('ja-jp');
    mes.should.equal('<a href="#" onClick="openLink(\'https://example.com/index.html\')" data-content="https://example.com/index.html" data-variation="very wide" class="jq-popup">example.com</a>');
  });
  
  // ---------------------------------------------------------
  // case 14 - multiple
});

function createMessage(user, content) {
  return new Message({
    message_id: 0,
    account: user,
    body: content,
    send_time: 12345,
    update_time: 12345
  });
}