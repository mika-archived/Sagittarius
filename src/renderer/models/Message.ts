import {Contact} from './Contact';
import {Serializable} from './Serializable';

export class Message extends Serializable {
  messageId: number;
  account: Contact;
  body: string;
  sendTime: number;
  updateTime: number;
  
  constructor(json: any) {
    super();
    this.fromJson(json);
    this.account = new Contact(json.account);
  }
}