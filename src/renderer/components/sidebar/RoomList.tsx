/// <reference path="../../../typings/tsd.d.ts" />

import * as $ from 'jquery';
import * as React from 'react';
import {RoomChangedCallback} from '../../delegates/RoomChangedCallback';
import {equalsTo} from '../../models/ArrayUtils';
import {Room} from '../../models/Room';

interface RoomListProps {
  selectedChatRoom: number;
  rooms: Room[];
  onRoomChanged: RoomChangedCallback;
}

export class RoomList extends React.Component<RoomListProps, {}> {
  
  constructor() {
    super();
  }
  
  onClick(id: number): React.EventHandler<React.MouseEvent> {
    this.props.onRoomChanged(id);
    this.props.rooms.forEach(w => {
      if(w.roomId == id) {
        $('#' + w.roomId).addClass('active');
      } else {
        $('#' + w.roomId).removeClass('active');
      }
    });
    return null;
  }
  
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
        var onClick = this.onClick.bind(this, room.roomId);
        return (
          <a className="item" key={room.roomId.toString()} id={room.roomId.toString()} onClick={onClick}>
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