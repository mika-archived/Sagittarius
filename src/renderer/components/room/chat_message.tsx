/// <reference path="../../../typings/tsd.d.ts" />

/// <reference path="../../global.ts" />

import * as React from 'react';
import * as $ from 'jquery';

import {DocumentFormatter} from '../../models/document_formatter';
import {Global} from '../../global';
import {Message} from '../../models/message';
import {Room} from '../../models/room';

interface IChatMessagsProps {
  message: Message;
  room: Room;
  key: any; // Upper component error 
  onReply(id: number): void;
  onQuote(id: number): void;
}

export class ChatMessage extends React.Component<IChatMessagsProps, any> {
  constructor(props) {
    super(props);
  }
  
  onReplyClick(id: number): React.EventHandler<React.MouseEvent> {
    this.props.onReply(id);
    return null;
  }
  
  onQuoteClick(id: number): React.EventHandler<React.MouseEvent> {
    this.props.onQuote(id);
    return null;
  }

  render() {
    console.log('Rendering Message :');
    console.log(this.props.message);
    var onReplyClick = this.onReplyClick.bind(this, this.props.message.messageId);
    var onQuoteClick = this.onQuoteClick.bind(this, this.props.message.messageId);
    return (
      <div className="comment">
        <a className="avatar">
          <img src={this.props.message.account.avatarImageUrl} />
        </a>
        <div className="content">
          <a className="author">{this.props.message.account.name}</a>
          <div className="metadata">
            <span className="date">{this.props.message.createdAt.toLocaleString()}</span>
          </div>
          <div className="text" dangerouslySetInnerHTML={{__html: new DocumentFormatter(this.props.message, this.props.room).format()}}>
          </div>
          <div className="actions">
            <a className="reply" onClick={onReplyClick}>Reply</a>
            <a className="quote" onClick={onQuoteClick}>Quote</a>
          </div>
        </div>
      </div>
    );
  }
}