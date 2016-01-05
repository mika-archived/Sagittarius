/// <reference path="../../typings/tsd.d.ts" />

/// <reference path="../global.ts" />

import * as React from 'react';
import * as $ from 'jquery';

import {Global} from '../global';
import {Room, DummyRoom} from '../models/room';

interface IChatroomProps {
  room: Room;
}

export class Chatroom extends React.Component<IChatroomProps, any> {
  constructor(props) {
    super(props);
  }
  
  render() {
    if(this.props.room instanceof DummyRoom) {
      return (
        <div className="ui active inverted dimmer">
          <div className="content">
            <div className="center centering">
              <h2 className="ui header">
                Not chatroom selected.
              </h2>
            </div>
          </div>
        </div>
      );
    } else {
      return (
        <p>Chatroom {this.props.room.name}</p>
      );
    }
  }
}