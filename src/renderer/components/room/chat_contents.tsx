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
  onReply(message: string): void;
}

interface IChatContentsStates {
  messages: Message[];
}

export class ChatContents extends React.Component<IChatContentsProps, IChatContentsStates> {
  disposable: Rx.IDisposable;
  isFirst: boolean;
  isUpdate: boolean;
  
  constructor(props) {
    super(props);
    this.isFirst = true;
    this.isUpdate = true;
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
  
  shouldComponentUpdate(): boolean {
    if(this.isUpdate) {
      return true;
    }
    this.isUpdate = true;
    return false;
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
  
  private onReply(id: number): React.EventHandler<React.MouseEvent> {
    this.state.messages.some((v) => {
      if(v.messageId == id) {
        this.props.onReply(
          '[rp aid=' + v.account.userId + ' to=' + this.props.room.roomId + '-' + v.messageId + '] ' + v.account.name + 'さん'
        );
      }
      return false;
    });
    this.isUpdate = false;
    return null;
  }
  
  render() {
    var messages = this.state.messages.map((m) => {
      var onReplyClick = this.onReply.bind(this);
      return (<ChatMessage message={m} room={this.props.room} key={m.messageId} onReply={onReplyClick}/>);
    });
    return (
      <div className="ui comments fixed-top scrollable" id="chatMessages">
          {messages}
      </div>
    );
  }
}