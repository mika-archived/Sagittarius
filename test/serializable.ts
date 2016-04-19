/// <reference path="../src/typings/tsd.d.ts" />
import "should";

import {Me} from "../src/renderer/models/Me";
import {Message} from "../src/renderer/models/Message";

const json1: any = {
  account_id: 1,
  avatar_image_url: "http://example.com/image.jpg",
  chatwork_id: "ID",
  department: "Department",
  facebook: "Chatwork",
  introduction: "Intro",
  mail: "mail@example.com",
  name: "Name",
  organization_id: 3,
  organization_name: "OrgName",
  room_id: 2,
  skype: "Chatwork",
  tel_extension: "0123-456-789",
  tel_mobile: "0123-456-789",
  tel_orgnization: "0123-456-789",
  title: "Title",
  twitter: "Chatwork",
  url: "http://example.com"
};

const json2: any = {
  account: json1,
  body: "Hello, world!",
  message_id: 1,
  send_time: 12345,
  update_time: 67890
};

describe("Serializable", () => {
  it("case 1", () => {
    const me: Me = new Me(json1);
    me.accountId.should.equal(1);
    me.roomId.should.equal(2);
    me.name.should.equal("Name");
  });

  it("case 2", () => {
    const message: Message = new Message(json2);
    message.account.accountId.should.equal(1);
    message.messageId.should.equal(1);
  });
});
