import {Room} from "./Room";

export class DummyRoom extends Room {
  constructor() {
    super({
      description: "",
      file_num: 0,
      icon_path: "https://tky-chat-work-appdata.s3.amazonaws.com/avatar/ico_default_violet.png",
      last_update_time: 0,
      mention_num: 0,
      message_num: 0,
      mytask_num: 0,
      name: "",
      role: "",
      room_id: -1,
      sticky: "",
      task_num: 0,
      type: "",
      unread_num: 0,
    });
  }
}
