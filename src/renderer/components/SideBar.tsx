/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import {RoomChangedCallback} from '../delegates/RoomChangedCallback';
import {Account} from './sidebar/Account';
import {RoomList} from './sidebar/RoomList';
import {Me} from '../models/Me';
import {Room} from '../models/Room';

interface SideBarProps {
  me?: Me;
  rooms: Room[];
  selectedChatRoom: number;
  onRoomChanged: RoomChangedCallback;
}

export class SideBar extends React.Component<SideBarProps, {}> {
  render(): JSX.Element {
    return (
      <div className="ui visible inverted left vertical sidebar menu">
        <Account me={this.props.me} />
        <RoomList selectedChatRoom={this.props.selectedChatRoom} 
                  rooms={this.props.rooms}
                  onRoomChanged={this.props.onRoomChanged}/>
      </div>
    );
  }
}