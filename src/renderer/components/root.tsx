/// <reference path="../../typings/tsd.d.ts" />

/// <reference path="../models/account.ts" />


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';

import {Account} from '../models/account';
import {Chatroom} from './chatroom';
import {Global} from '../global';
import {Room, DummyRoom} from '../models/room';
import {LoginUser} from './login_user';

interface IRootProps {
  user: Account;
}

interface IRoomState {
  rooms: Room[];
  selectedRoom: number;
}

export class Root extends React.Component<IRootProps, IRoomState> {
  constructor(props) {
    super(props);
    
    this.state = {
      rooms: []
    } as IRoomState;
    
    Global.Chatwork.rooms().then((r) => {
      this.setState({ rooms: r, selectedRoom: 0 });
    });
    this.getRoom.bind(this);
  }
  
  onItemClick(id: number): React.EventHandler<React.MouseEvent> {
    this.setState({ rooms: this.state.rooms, selectedRoom: id});
    this.state.rooms.forEach((r) => {
      if(r.roomId == id) {
        $('#' + r.roomId).addClass('active');
      } else {
        $('#' + r.roomId).removeClass('active');
      }
    });
    
    return null;
  }
  
  public getRoom(roomId: number): Room {
    if(this.state.rooms.length == 0) {
      return new DummyRoom();
    }
    var temp = this.state.rooms.filter((item, index, array) => item.roomId == roomId);
    if(temp.length > 0) {
      return temp[0];
    } else {
      return new DummyRoom();
    }
  }
  
  render() {
    var rooms = this.state.rooms.map((room) => {
      var onClick = this.onItemClick.bind(this, room.roomId);
      return (
        <a key={room.roomId} className="item" onClick={onClick} id={room.roomId.toString()}>
          <img className="ui avatar image" src={room.iconPath} />
          <span>{room.name}</span>
        </a>
      );
    });
    return (
      <div className="filled">
        <div className="ui sidebar vertical left menu visible">
          <LoginUser avatarImageUrl={this.props.user.avatarImageUrl} name={this.props.user.name} />
          <div className="item">
            <div className="active header">
              Chatrooms
            </div>
            <div className="menu">
              {rooms}
            </div>
          </div>
        </div>
        <div className="pusher filled filled-width">
          <div className="ui basic custom segment">
            <Chatroom room={this.getRoom(this.state.selectedRoom)}/>
          </div>
        </div>
      </div>
    );
  }
}