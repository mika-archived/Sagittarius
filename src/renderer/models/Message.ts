import {Contact} from './Contact';
import {DtextFormatter} from './DtextFormatter';
import {Serializable} from './Serializable';

export class Message extends Serializable {
  messageId: number;
  account: Contact;
  body: string;
  createdAt: Date;
  updatedAt: Date;
  
  private sendTime: number;
  private updateTime: number;
  private formatter: DtextFormatter;
  
  constructor(json: any) {
    super();
    this.fromJson(json);
    this.account = new Contact(json.account);
    this.createdAt = new Date(this.sendTime * 1000);
    this.updatedAt = new Date(this.updateTime * 1000);
    this.formatter = new DtextFormatter(this.body);
  }
  
  formattedText(): string {
    return this.formatter.format();
  }
}