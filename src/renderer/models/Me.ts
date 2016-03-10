import {Contact} from './Contact';

export class Me extends Contact {
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
  
  constructor(json: any) {
    super(json);
  }
}