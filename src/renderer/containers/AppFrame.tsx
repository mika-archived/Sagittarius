/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import {connect} from 'react-redux'
import {fetchMe, fetchRooms} from '../actions/Chatwork';
import {selectChatRoom} from '../actions/UserAction';
import {Contents} from '../components/Contents';
import {SideBar} from '../components/SideBar';
import {Me} from '../models/Me';
import {Room} from '../models/Room';

interface AppFrameProps {
  dispatch?: Redux.Dispatch;
  me?: Me;
  rooms?: Room[];
  selectChatRoom?: number;
}

class AppFrame extends React.Component<AppFrameProps, {}> {
  
  constructor() {
    super();
  }
  
  /* Handlers */
  onRoomChanged(id: number): void {
    this.props.dispatch(selectChatRoom(id));
  }
  
  componentDidMount(): void {
    this.props.dispatch(fetchMe());
    this.props.dispatch(fetchRooms());
  }
  
  render(): JSX.Element {
    return (
      <div>
        <SideBar me={this.props.me} 
                 selectedChatRoom={this.props.selectChatRoom}
                 rooms={this.props.rooms}
                 onRoomChanged={this.onRoomChanged.bind(this)} />
        <Contents />
      </div>
    );
  }
}

function mapStateToProps(state: any): any {
  return {
    me: state.fetchMe,
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