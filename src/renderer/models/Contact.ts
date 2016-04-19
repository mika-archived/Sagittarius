import {Serializable} from "./Serializable";

export class Contact extends Serializable {
  public accountId: number;
  public roomId: number;
  public name: string;
  public chatworkId: string;
  public organizationId: number;
  public organizationName: string;
  public department: string;
  public avatarImageUrl: string;

  constructor(json: any) {
    super();
    this.fromJson(json);
  }
}
