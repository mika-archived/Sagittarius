import {Me} from './Me';

export class DummyMe extends Me {
  constructor() {
    super({
      account_id: -1,
      name: "",
      avatar_image_url: "https://tky-chat-work-appdata.s3.amazonaws.com/avatar/ico_default_violet.png"
    });
  }
}