/// <reference path="../src/typings/tsd.d.ts" />

var should = require('should');

import {Account} from '../src/renderer/models/account';
import {DocumentFormatter} from '../src/renderer/models/document_formatter';
import {Global} from '../src/renderer/global';
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
  members: [
    user1,
    user2
  ],
  unread_num: 0
});

describe('DocumentFormatter', () => {
    it('case 1 - plain', () => {
      var mes = new DocumentFormatter(createMessage(user1, 'Hello'), room).format('ja-jp');
      mes.should.equal('Hello');
    });
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