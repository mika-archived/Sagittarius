import {Contact} from './Contact';
import {Serializable} from './Serializable';

export class File extends Serializable {
  fileId: number;
  account: Contact;
  messageId: number;
  filename: string;
  filesize: number;
  uploadTime: number;
  
  constructor(json: any) {
    super();
    this.fromJson(json);
    this.account = new Contact(json.account);
  }
}