import {Contact} from "./Contact";
import {Serializable} from "./Serializable";

export class Task extends Serializable {
  public taskId: number;
  public account: Contact;
  public assignedByAccount: Contact;
  public messageId: number;
  public body: string;
  public limitTime: number;
  public status: string;

  constructor(json: any) {
    super();
    this.fromJson(json);
    this.account = new Contact(json.account);
    this.assignedByAccount = new Contact(json.assigned_by_account);
  }
}
