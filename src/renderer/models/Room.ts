import {Serializable} from "./Serializable";

export class Room extends Serializable {
  public roomId: number;
  public name: string;
  public type: string;
  public role: string;
  public sticky: boolean;
  public unreadNum: number;
  public mentionNum: number;
  public mytaskNum: number;
  public messageNum: number;
  public fileNum: number;
  public taskNum: number;
  public iconPath: string;
  public lastUpdateTime: number;
  public description: string;

  constructor(json: any) {
    super();
    this.fromJson(json);

    this.description = "";
  }
}
