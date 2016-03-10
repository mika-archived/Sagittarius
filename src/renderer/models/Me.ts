import {Serializable} from './Serializable';

export class Me extends Serializable {
  accountId: number;
  roomId: number;
  name: string;
  chatworkId: string;
  organizationId: number;
  organizationName: string;
  department: string;
  title: string;
  url: string;
  introduction: string;
  mail: string;
  telOrganization: string;
  telExtension: string;
  telMobile: string;
  skype: string;
  facebook: string;
  twitter: string;
  avatarImageUrl: string;
  
  constructor(json: any) {
    super();
    this.fromJson(json);
  }
}