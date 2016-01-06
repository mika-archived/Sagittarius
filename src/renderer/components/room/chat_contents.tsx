/// <reference path="../../../typings/tsd.d.ts" />

/// <reference path="../../global.ts" />

import * as React from 'react';
import * as $ from 'jquery';

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
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {

  }
  
  componentDidUpdate() {

  }
  
  render() {
    var messages = this.state.messages.map((m) => {
      <ChatMessage message={m} />
    });
    return (
      <div className="ui comments fixed-top scrollable">
          {messages}
      </div>
    );
  }
}