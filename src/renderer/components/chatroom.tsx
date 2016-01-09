/// <reference path="../../typings/tsd.d.ts" />

/// <reference path="../global.ts" />

import * as React from 'react';
import * as $ from 'jquery';

import {ChatContents} from './room/chat_contents';
import {Global} from '../global';
import {MessageBox} from './room/message_box';
import {Room, DummyRoom} from '../models/room';
import {RoomInfo} from './room/room_info';


interface IChatroomProps {
  room: Room;
}

interface IChatroomState {
  content: string;
}

export class Chatroom extends React.Component<IChatroomProps, IChatroomState> {
  constructor(props) {
    super(props);
    this.state = {
      content: ''
    } as IChatroomState;
  }
  
  private onReply(message: string) {
    this.setState({content: message});
  }
  
  render() {
    if(this.props.room instanceof DummyRoom) {
      return (
        <div className="ui active inverted dimmer">
          <div className="content">
            <div className="center">
              <h2 className="ui header">
                Not chatroom selected.
              </h2>
            </div>
          </div>
        </div>
      );
    } else {
      var onReplyClick = this.onReply.bind(this);
      return (
        <div>
          <RoomInfo room={this.props.room} />
          <ChatContents room={this.props.room} onReply={onReplyClick} />
          <MessageBox room={this.props.room} message={this.state.content} />
        </div>
      );
    }
  }
}