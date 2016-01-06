/// <reference path="../../../typings/tsd.d.ts" />

/// <reference path="../../global.ts" />

import * as React from 'react';
import * as $ from 'jquery';
import * as Rx from 'rx';

import {Global} from '../../global';
import {Message} from '../../models/message';
import {Room} from '../../models/room';

interface IChatMessagsProps {
  message: Message;
}

export class ChatMessage extends React.Component<IChatMessagsProps, any> {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    this.register();
  }
  
  componentWillUnmount() {
    this.unregister();
  }
  
  componentWillUpdate() {
    this.unregister();
  }
  
  componentDidUpdate() {
    this.register();
  }
  
  private register(): void {

  }
  
  private unregister(): void {
    
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
          <div className="text">
            {this.props.message.toHtml()}
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