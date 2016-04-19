import {Serializable} from "./Serializable";

export class Members extends Serializable {
  public admin: number[];
  public member: number[];
  public readonly: number[];

  constructor(json: any) {
    super();
    this.fromJson(json);
  }
}
