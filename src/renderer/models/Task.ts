import {Contact} from './Contact';
import {Serializable} from './Serializable';

export class Task extends Serializable {
  taskId: number;
  account: Contact;
  assignedByAccount: Contact;
  messageId: number;
  body: string;
  limitTime: number;
  status: string;
  
  constructor(json: any) {
    super();
    this.fromJson(json);
    this.account = new Contact(json.account);
    this.assignedByAccount = new Contact(json.assigned_by_account);
  }
}