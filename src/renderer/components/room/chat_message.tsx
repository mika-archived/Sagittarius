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
}

export class ChatMessage extends React.Component<IChatMessagsProps, any> {
  constructor(props) {
    super(props);
  }

  render() {
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
            <a className="reply">Reply</a>
            <a className="quote">Quote</a>
          </div>
        </div>
      </div>
    );
  }
}