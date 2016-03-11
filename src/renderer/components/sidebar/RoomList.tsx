/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';
import {equalsTo} from '../../models/ArrayUtils';
import {Room} from '../../models/Room';

interface RoomListProps {
  selectedChatRoom: number;
  rooms: Room[];
}

export class RoomList extends React.Component<RoomListProps, {}> {
  
  shouldComponentUpdate(nextProps: RoomListProps, nextState: any): boolean {
    if(equalsTo(nextProps.rooms, this.props.rooms)) {
      return false;
    }
    return true;
  }
  
  render(): JSX.Element {
    var rooms = [];
    if(this.props.rooms.length > 0) {
      rooms = this.props.rooms.map((room) => {
        return (
          <a href="#" className="item" key={room.roomId.toString()}>
            <img className="ui avatar right spaced image" src={room.iconPath} />
            {room.name}
          </a>
        );
      });
    }
    return (
      <div className="item">
        <div className="header">
          Chat Lists
        </div>
        <div className="menu">
          {rooms}
        </div>
      </div>
    );
  }
}