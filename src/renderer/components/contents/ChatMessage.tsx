/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';
import {Message} from '../../models/Message';

interface ChatMessageProps {
  message: Message;
}

export class ChatMessage extends React.Component<ChatMessageProps, {}> {
  render(): JSX.Element {
    return (
      <div>
        {this.props.message.body}
      </div>
    );
  }
}