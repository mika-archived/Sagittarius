/// <reference path="../../typings/tsd.d.ts" />
import * as $ from "jquery";
import * as Ix from "ix";
import * as React from "react";
import * as ReactDOM from "react-dom";
import {connect} from "react-redux";
import {remote} from "electron";

import {fetchMe, fetchRooms, fetchMembers, fetchMessages} from "../actions/Chatwork";
import {selectChatRoom} from "../actions/UserAction";
import {Authenticate} from "../components/Authenticate";
import {Contents} from "../components/Contents";
import {SideBar} from "../components/SideBar";
import {Contact} from "../models/Contact";
import {DummyRoom} from "../models/DummyRoom";
import {Me} from "../models/Me";
import {Message} from "../models/Message";
import {Room} from "../models/Room";

/* tslint:disable */
const BrowserWindow = remote.BrowserWindow;
/* tslint:enable */

/* inner */
interface RoomMembers {
  members: Contact[];
}

interface RoomMessages {
  messages: Message[];
}

interface AppFrameProps {
  dispatch?: Redux.Dispatch;
  error?: string;
  me?: Me;
  rooms?: Room[];
  roomMembers?: RoomMembers[];
  roomMessages?: RoomMessages[];
  selectChatRoom?: number;
  counter?: number;
}

class AppFrame extends React.Component<AppFrameProps, {}> {

  constructor() {
    super();
  }

  public componentDidMount(): void {
    this.props.dispatch(fetchMe());
    this.props.dispatch(fetchRooms());
  }

  public componentDidUpdate(prevProps: AppFrameProps, prevState: {}): void {
    if (this.props.error !== "Invalid API token") {
      return;
    }
    const auth: JSX.Element = (
      <Authenticate />
    );
    ReactDOM.render(auth, document.getElementById("diag"));
    $(".ui.modal").modal({
      blurring: true,
      closable: false,
      onApprove: () => {
        localStorage.setItem("chatwork-token", $("#form_apitoken").val());
        this.props.dispatch(fetchMe());
        this.props.dispatch(fetchRooms());
      }
    }).modal("show");
  }

  public render(): JSX.Element {
    let room: DummyRoom = new DummyRoom();
    let members: Contact[] = [], messages: Message[] = [];
    if (this.props.rooms.length > 0 && this.props.selectChatRoom !== -1) {
      room = Ix.Enumerable.fromArray(this.props.rooms)
        .single(w => w.roomId === this.props.selectChatRoom);
      members = this.props.roomMembers[room.roomId].members;
      messages = this.props.roomMessages[room.roomId].messages;
      // BrowserWindow.getFocusedWindow().setTitle("Sagittarius - {0}".format(room.name));
    }
    return (
      <div>
        <SideBar me={this.props.me} 
                 selectedChatRoom={this.props.selectChatRoom}
                 rooms={this.props.rooms}
                 onRoomChanged={this.onRoomChanged.bind(this)} />
        <Contents room={room} members={members} messages={messages} />
      </div>
    );
  }

  /* Handlers */
  private onRoomChanged(id: number): void {
    this.props.dispatch(selectChatRoom(id));
    this.props.dispatch(fetchMembers(id));
    this.props.dispatch(fetchMessages(id, true));
  }

  private onRoomMessageUpdated(id: number): void {
    this.props.dispatch(fetchMessages(id));
  }
}

function mapStateToProps(state: any): any {
  return {
    counter: Math.floor(Math.random() * 101),
    error: state.handleError,
    me: state.fetchMe,
    roomMembers: state.fetchRoomMembers,
    roomMessages: state.fetchRoomMessages,
    rooms: state.fetchRooms,
    selectChatRoom: state.selectChatRoom
  } as AppFrameProps;
}

/*
function mapDispatchToProps(dispatch: any): any {
  console.log(dispatch);
  return {};
}
*/

export default connect(mapStateToProps/*, mapDispatchToProps*/)(AppFrame);
