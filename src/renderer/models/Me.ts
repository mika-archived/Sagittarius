import {Contact} from "./Contact";

export class Me extends Contact {
  public title: string;
  public url: string;
  public introduction: string;
  public mail: string;
  public telOrganization: string;
  public telExtension: string;
  public telMobile: string;
  public skype: string;
  public facebook: string;
  public twitter: string;

  constructor(json: any) {
    super(json);
  }
}
