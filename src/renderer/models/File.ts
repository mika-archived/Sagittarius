import {Contact} from "./Contact";
import {Serializable} from "./Serializable";

export class File extends Serializable {
  public fileId: number;
  public account: Contact;
  public messageId: number;
  public filename: string;
  public filesize: number;
  public uploadTime: number;

  constructor(json: any) {
    super();
    this.fromJson(json);
    this.account = new Contact(json.account);
  }
}
