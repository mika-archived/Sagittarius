import {Serializable} from "./Serializable";

export class Status extends Serializable {
  public unreadRoomNum: number;
  public mentionRoomNum: number;
  public mytaskRoomNum: number;
  public unreadNum: number;
  public mentionNum: number;
  public mytaskNum: number;

  constructor(json: any) {
    super();
    this.fromJson(json);
  }
}
