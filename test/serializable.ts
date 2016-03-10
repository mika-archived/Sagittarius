/// <reference path="../src/typings/tsd.d.ts" />

var should = require('should');

import {Serializable} from '../src/renderer/models/Serializable';
import {Me} from '../src/renderer/models/Me';
import {Message} from '../src/renderer/models/Message';

var json1 = {
  account_id: 1,
  room_id: 2,
  name: "Name",
  chatwork_id: "ID",
  organization_id: 3,
  organization_name: "OrgName",
  department: "Department",
  title: "Title",
  url: "http://example.com",
  introduction: "Intro",
  mail: "mail@example.com",
  tel_orgnization: "0123-456-789",
  tel_extension: "0123-456-789",
  tel_mobile: "0123-456-789",
  skype: "Chatwork",
  facebook: "Chatwork",
  twitter: "Chatwork",
  avatar_image_url: "http://example.com/image.jpg"
};

var json2 = {
  message_id: 1,
  account: json1,
  body: "Hello, world!",
  send_time: 12345,
  update_time: 67890
};

describe('Serializable', () => {
  it('case 1', () => {
    var me = new Me(json1);
    me.accountId.should.equal(1);
    me.roomId.should.equal(2);
    me.name.should.equal("Name");
  });
  
  it('case 2', () => {
    var message = new Message(json2);
    message.account.accountId.should.equal(1);
    message.messageId.should.equal(1);
  });
});
