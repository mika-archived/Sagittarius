/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';
import {t} from '../../models/I18N';
import {Message} from '../../models/Message';

interface ChatMessageProps {
  message: Message;
}

export class ChatMessage extends React.Component<ChatMessageProps, {}> {
  
  render(): JSX.Element {
    return (
      <div className="comment">
        <span className="avatar">
          <img src={this.props.message.account.avatarImageUrl} />
        </span>
        <div className="content">
          <span className="author">{this.props.message.account.name}</span>
          <div className="metadata">
            <span className="date">{this.props.message.createdAt.toLocaleString()}</span>
          </div>
          <div className="text" dangerouslySetInnerHTML={{__html: this.props.message.formattedText()}}>
          </div>
          <div className="actions">
            <a className="reply">
              <i className="icon reply"></i>
              {t("application", "action_reply")}
            </a>
            <a className="quote">
              <i className="icon quote left"></i>
              {t("application", "action_quote")}
            </a>
          </div>
        </div>
      </div>
    );
  }
}