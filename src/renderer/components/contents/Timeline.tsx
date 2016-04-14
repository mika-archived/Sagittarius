/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';
import {ChatMessage} from './ChatMessage';
import {Message} from '../../models/Message';

interface TimelineProps {
  messages: Message[];
}

export class Timeline extends React.Component<TimelineProps, {}> {
  render(): JSX.Element {
    var messages = this.props.messages.map(w => {
      return <ChatMessage message={w} key={w.messageId} />
    });
    return (
      <div className="ui comments srcollable">
        {messages}
      </div>
    );
  }
}