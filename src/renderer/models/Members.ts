import {Serializable} from './Serializable';

export class Members extends Serializable {
  admin: number[];
  member: number[];
  readonly: number[];
  
  constructor(json: any) {
    super();
    this.fromJson(json);
  }
}