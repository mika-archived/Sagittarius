import {Serializable} from './Serializable';

export class Contact extends Serializable {
  accountId: number;
  roomId: number;
  name: string;
  chatworkId: string;
  organizationId: number;
  organizationName: string;
  department: string;
  avatarImageUrl: string;
  
  constructor(json: any) {
    super();
    this.fromJson(json);
  }
}