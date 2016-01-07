/// <reference path="../../../typings/tsd.d.ts" />

/// <reference path="../../global.ts" />

import * as React from 'react';
import * as $ from 'jquery';
import * as Rx from 'rx';

import {API} from '../../models/api';
import {ChatMessage} from './chat_message';
import {Global} from '../../global';
import {Message} from '../../models/message';
import {Room} from '../../models/room';

interface IChatContentsProps {
  room: Room;
}

interface IChatContentsStates {
  messages: Message[];
}

export class ChatContents extends React.Component<IChatContentsProps, IChatContentsStates> {
  disposable: Rx.IDisposable;
  isFirst: boolean;
  
  constructor(props) {
    super(props);
    this.isFirst = true;
    this.state = {
      messages: []
    } as IChatContentsStates;
  }
  
  componentDidMount() {
    this.register();
    $('.jq-popup').popup();
  }
  
  componentDidUpdate() {
    $('#chatMessages').animate({scrollTop: $('#chatMessages')[0].scrollHeight}, 'fast');
    $('.jq-popup').popup();
  }
  
  componentWillUnmount() {
    this.unregister();
    this.isFirst = true;
  }
  
  componentWillReceiveProps() {
    this.unregister();
    this.isFirst = true;
    this.state.messages = [];
    this.register();
  }
  
  private register(): void {
    this.disposable = Rx.Observable.timer(0, API.messages)
      .timeInterval()
      .subscribe(w => {
        Global.Chatwork.roomMessages(this.props.room.roomId, this.isFirst).then((v) => {
          this.isFirst = false;
          var messages = this.state.messages;
          v.forEach((e) => {
            messages.push(e);
          });
          this.setState({messages: messages});
      });
    });
  }
  
  private unregister(): void {
    this.disposable.dispose();
  }
  
  render() {
    var messages = this.state.messages.map((m) => {
      return (<ChatMessage message={m} room={this.props.room} key={m.messageId} />);
    });
    return (
      <div className="ui comments fixed-top scrollable" id="chatMessages">
          {messages}
      </div>
    );
  }
}