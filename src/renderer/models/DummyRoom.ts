import {Room} from './Room';

export class DummyRoom extends Room {
  constructor() {
    super({
      room_id: -1,
      name: "",
      type: "",
      role: "",
      sticky: "",
      unread_num: 0,
      mention_num: 0,
      mytask_num: 0,
      message_num: 0,
      file_num: 0,
      task_num: 0,
      icon_path: "https://tky-chat-work-appdata.s3.amazonaws.com/avatar/ico_default_violet.png",
      last_update_time: 0,
      description: ""
    });
  }
}