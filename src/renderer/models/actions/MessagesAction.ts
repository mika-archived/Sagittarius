import {AsyncAction} from "./AsyncAction";
import {Message} from "../Message";

export interface MessagesAction extends AsyncAction {
  roomId: number;
  messages: Message[];
}
