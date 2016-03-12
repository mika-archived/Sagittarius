/// <reference path="../../typings/tsd.d.ts" />

import * as Ix from 'ix';
import * as React from 'react';
import {connect} from 'react-redux'
import {fetchMe, fetchRooms, fetchMembers} from '../actions/Chatwork';
import {selectChatRoom} from '../actions/UserAction';
import {Contents} from '../components/Contents';
import {SideBar} from '../components/SideBar';
import {DummyRoom} from '../models/DummyRoom';
import {Me} from '../models/Me';
import {Room} from '../models/Room';

interface AppFrameProps {
  dispatch?: Redux.Dispatch;
  me?: Me;
  rooms?: Room[];
  selectChatRoom?: number;
  counter: number;
}

class AppFrame extends React.Component<AppFrameProps, {}> {
  
  constructor() {
    super();
  }
  
  /* Handlers */
  onRoomChanged(id: number): void {
    this.props.dispatch(selectChatRoom(id));
    this.props.dispatch(fetchMembers(id));
  }
  
  componentDidMount(): void {
    this.props.dispatch(fetchMe());
    this.props.dispatch(fetchRooms());
  }
  
  render(): JSX.Element {
    var room = new DummyRoom();
    if(this.props.rooms.length > 0 && this.props.selectChatRoom != -1) {
      room = Ix.Enumerable.fromArray(this.props.rooms)
        .single(w => w.roomId == this.props.selectChatRoom);
    }
    return (
      <div>
        <SideBar me={this.props.me} 
                 selectedChatRoom={this.props.selectChatRoom}
                 rooms={this.props.rooms}
                 onRoomChanged={this.onRoomChanged.bind(this)} />
        <Contents room={room}/>
      </div>
    );
  }
}

function mapStateToProps(state: any): any {
  var _ = {
    me: state.fetchMe,
    rooms: state.fetchRooms,
    selectChatRoom: state.selectChatRoom,
    counter: Math.floor(Math.random() * 101)
  } as AppFrameProps;
  if(_.rooms.length > 0) {
    _.rooms.some((w, index, array) => {
      if(w.roomId == state.fetchRoomMembers.id) {
        w.members = state.fetchRoomMembers.members;
        return true;
      }
    });
  }
  return _;
}

/*
function mapDispatchToProps(dispatch: any): any {
  console.log(dispatch);
  return {};
}
*/

export default connect(mapStateToProps/*, mapDispatchToProps*/)(AppFrame);