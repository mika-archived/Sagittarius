/// <reference path="../../typings/tsd.d.ts" />

import * as Ix from 'ix';
import * as React from 'react';
import {connect} from 'react-redux'
import {fetchMe, fetchRooms, fetchMembers, fetchMessages} from '../actions/Chatwork';
import {selectChatRoom} from '../actions/UserAction';
import {Contents} from '../components/Contents';
import {SideBar} from '../components/SideBar';
import {Contact} from '../models/Contact';
import {DummyRoom} from '../models/DummyRoom';
import {Me} from '../models/Me';
import {Message} from '../models/Message';
import {Room} from '../models/Room';

/* inner */
interface RoomMembers {
  members: Contact[];
}

interface RoomMessages {
  messages: Message[];
}

interface AppFrameProps {
  dispatch?: Redux.Dispatch;
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
  
  /* Handlers */
  onRoomChanged(id: number): void {
    this.props.dispatch(selectChatRoom(id));
    this.props.dispatch(fetchMembers(id));
    this.props.dispatch(fetchMessages(id, true));
  }
  
  onRoomMessageUpdated(id: number): void {
    this.props.dispatch(fetchMessages(id));
  }
  
  componentDidMount(): void {
    this.props.dispatch(fetchMe());
    this.props.dispatch(fetchRooms());
  }
  
  render(): JSX.Element {
    var room = new DummyRoom();
    var members = [];
    if(this.props.rooms.length > 0 && this.props.selectChatRoom != -1) {
      room = Ix.Enumerable.fromArray(this.props.rooms)
        .single(w => w.roomId == this.props.selectChatRoom);
      members = this.props.roomMembers[room.roomId].members;
    }
    return (
      <div>
        <SideBar me={this.props.me} 
                 selectedChatRoom={this.props.selectChatRoom}
                 rooms={this.props.rooms}
                 onRoomChanged={this.onRoomChanged.bind(this)} />
        <Contents room={room} members={members}/>
      </div>
    );
  }
}

function mapStateToProps(state: any): any {
  return {
    me: state.fetchMe,
    rooms: state.fetchRooms,
    roomMembers: state.fetchRoomMembers,
    roomMessages: state.fetchRoomMessages,
    selectChatRoom: state.selectChatRoom,
    counter: Math.floor(Math.random() * 101)
  } as AppFrameProps;
}

/*
function mapDispatchToProps(dispatch: any): any {
  console.log(dispatch);
  return {};
}
*/

export default connect(mapStateToProps/*, mapDispatchToProps*/)(AppFrame);