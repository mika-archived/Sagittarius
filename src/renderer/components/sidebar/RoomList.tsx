/// <reference path="../../../typings/tsd.d.ts" />

import * as $ from 'jquery';
import * as React from 'react';
import {RoomChangedCallback} from '../../delegates/RoomChangedCallback';
import {equalsTo, equalsToArray} from '../../models/Equality';
import {t} from '../../models/I18N';
import {Me} from '../../models/Me';
import {Room} from '../../models/Room';

interface RoomListProps {
  selectedChatRoom: number;
  rooms: Room[];
  me: Me;
  onRoomChanged: RoomChangedCallback;
}

export class RoomList extends React.Component<RoomListProps, {}> {
  
  constructor() {
    super();
  }
  
  /* Event Handlers */
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
  
  /* React Lifecycle */
  componentDidUpdate(prevProps: RoomListProps, prevState: any): void {
    if(this.props.selectedChatRoom == -1 && this.props.rooms.length > 0) {
      this.onClick(this.props.rooms[0].roomId);
    }
  }

  shouldComponentUpdate(nextProps: RoomListProps, nextState: any): boolean {
    if(equalsToArray(nextProps.rooms, this.props.rooms) && equalsTo(nextProps.me, this.props.me)) {
      return false;
    }
    return true;
  }
  
  render(): JSX.Element {
    var rooms = [];
    if(this.props.rooms.length > 0) {
      rooms = this.props.rooms.map((room) => {
        var onClick = this.onClick.bind(this, room.roomId);
        var path = room.type === "my" ? this.props.me.avatarImageUrl : room.iconPath;
        return (
          <a className="item" 
             key={room.roomId.toString()} 
             id={room.roomId.toString()}
             onClick={onClick}>
            <img className="ui avatar right spaced image" src={path} />
            {room.name}
          </a>
        );
      });
    }
    return (
      <div className="item">
        <div className="header">
          {t('application', 'chat_rooms')}
        </div>
        <div className="menu">
          {rooms}
        </div>
      </div>
    );
  }
}