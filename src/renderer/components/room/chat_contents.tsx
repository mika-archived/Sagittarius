/// <reference path="../../../typings/tsd.d.ts" />

/// <reference path="../../global.ts" />

import * as React from 'react';
import * as $ from 'jquery';

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
    return (
      <div className="ui comments fixed-top scrollable">
        <div className="comment">
          <a className="avatar">
            <img src={this.props.room.iconPath} />
          </a>
          <div className="content">
            <a className="author">Matt</a>
            <div className="metadata">
              <span className="date">Today at 5:42PM</span>
            </div>
            <div className="text">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor orci, porttitor eu efficitur at, fermentum id dui. Nullam eget fermentum ante, a hendrerit metus. Aenean ac ante et felis finibus bibendum. Nulla orci est, semper nec lectus eget, hendrerit imperdiet tellus. Cras convallis egestas mi, non lacinia ipsum. Donec nisl mi, semper nec varius in, cursus eget sem. Mauris elementum ornare tristique. Donec vel neque sit amet erat luctus porttitor quis ac dolor.
            </div>
            <div className="actions">
              <a className="reply">Reply</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}