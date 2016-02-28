/// <reference path="../../typings/tsd.d.ts" />

/// <reference path="../models/account.ts" />


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';
import * as Rx from 'rx';

import {Account} from '../models/account';
import {API} from '../models/api';
import {Chatroom} from './chatroom';
import {Global} from '../global';
import {LoginUser} from './login_user';
import {Room, DummyRoom} from '../models/room';
import {Status} from '../models/status';
import {i18n} from '../models/i18n';

var ipc = require('ipc');

interface IRootProps {
  user: Account;
}

interface IRoomState {
  rooms: Room[];
  selectedRoom: number;
}

export class Root extends React.Component<IRootProps, IRoomState> {
  
  private oldNotice: Status;
  
  constructor(props) {
    super(props);
    
    this.state = {
      rooms: []
    } as IRoomState;
    
    Global.Chatwork.rooms().then((r) => {
      this.setState({ rooms: r, selectedRoom: 0 });
    });
    this.getRoom.bind(this);
    
    Rx.Observable.timer(0, API.status).subscribe(() => {
      Global.Chatwork.myStatus().then((w) => {
        console.log('Unread check: ' + w.unreadNum);
        // Chatwork.com で見ないかぎり、未読数は変更されない
        if(w.unreadNum != this.oldNotice.unreadNum && w.unreadNum > 0) {
          this.notify();
        };
      });
    });
  }
  
  private notify() {
    this.state.rooms.forEach((w) => {
      if(w.roomId != this.state.selectedRoom) {
        Global.Chatwork.roomInfo(w.roomId).then((r) => {
          if(r.unreadNum > 0) {
            ipc.send('desktop-notification', {
              title: 'New Messages!',
              message: 'Unread messages in "' + r.name + '"',
              sound: 'Pop'
            });
            var temp = this.state.rooms;
            temp.some(w => {
              if(w.roomId == r.roomId) {
                w.unreadNum = r.unreadNum;
                return true;
              }
              return false;
            });
            this.setState({ rooms: temp, selectedRoom: this.state.selectedRoom });
          }
        });
      }
    });
  }
  
  onItemClick(id: number): React.EventHandler<React.MouseEvent> {
    this.state.rooms.forEach((r) => {
      if(r.roomId == id) {
        $('#' + r.roomId).addClass('active');
        var temp = this.state.rooms;
        temp.some(w => {
          if(w.roomId == r.roomId) {
            w.unreadNum = 0;
            return true;
          }
          return false;
        });
        this.setState({ rooms: temp, selectedRoom: id });
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
      var unread = (<span></span>);
      if(room.unreadNum > 0) {
        unread = (<span className="ui grey circular label">{room.unreadNum}</span>)
      }
      return (
        <a key={room.roomId} className="item" onClick={onClick} id={room.roomId.toString()}>
          <img className="ui avatar image" src={room.iconPath} />
          <span>{room.name}</span>
          {unread}
        </a>
      );
    });
    return (
      <div className="filled">
        <div className="ui sidebar vertical left menu visible">
          <LoginUser avatarImageUrl={this.props.user.avatarImageUrl} name={this.props.user.name} />
          <div className="item">
            <div className="active header">
              {i18n.t('app_chatrooms')}
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