/// <reference path="../../typings/tsd.d.ts" />

/// <reference path="../models/account.ts" />


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';

import {Account} from '../models/account';
import {Global} from '../global';
import {Room} from '../models/room';
import {User} from './user';

interface IRootProps {
  user: Account;
}

interface IRoomState {
  rooms: Room[];
}

export class Root extends React.Component<IRootProps, IRoomState> {
  constructor(props) {
    super(props);
    
    this.state = {
      rooms: []
    } as IRoomState;
    
    Global.Chatwork.rooms().then((r) => {
      console.log(r);
      this.setState({ rooms: r });
    });
  }
  
  render() {
    var rooms = this.state.rooms.map((room) => {
      return (
        <a className="item" id={room.roomId.toString()}>
          <img className="ui avatar image" src={room.iconPath} />
          <span>{room.name}</span>
        </a>
      );
    });
    return (
      <div>
        <div className="ui sidebar vertical menu visible">
          <User avatarImageUrl={this.props.user.avatarImageUrl} name={this.props.user.name} />
          <div className="item">
            <div className="active header">
              Chatrooms
            </div>
            <div className="menu">
              {rooms}
            </div>
          </div>
        </div>
        <div className="pusher">
        </div>
      </div>
    );
  }
}