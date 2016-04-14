/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';
import {Message} from '../../models/Message';

interface ChatMessageProps {
  message: Message;
}

export class ChatMessage extends React.Component<ChatMessageProps, {}> {
  render(): JSX.Element {
    return (
      <div className="comment">
        <a className="avatar">
          <img src={this.props.message.account.avatarImageUrl} />
        </a>
        <div className="content">
          <a className="author">{this.props.message.account.name}</a>
          <div className="metadata">
            <div className="date">{this.props.message.sendTime}</div>
          </div>
          <div className="text">
            {this.props.message.body}
          </div>
        </div>
      </div>
    );
  }
}