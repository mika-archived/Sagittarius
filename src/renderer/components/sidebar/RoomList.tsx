/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';

interface RoomListProps {
  
}

export class RoomList extends React.Component<RoomListProps, {}> {
  render(): JSX.Element {
    return (
      <div className="item">
        <div className="header">
          Chat Lists
        </div>
        <div className="menu">
          <a href="#" className="active item">
            <img className="ui avatar right spaced image" src="https://tky-chat-work-appdata.s3.amazonaws.com/avatar/ico_default_violet.png" />
            <b>Room Metro #1</b>
          </a>
          <a href="#" className="item">
            <img className="ui avatar right spaced image" src="https://tky-chat-work-appdata.s3.amazonaws.com/avatar/ico_default_violet.png" />
            <b>Room Metro #2</b>
          </a>
          <a href="#" className="item">
            <img className="ui avatar right spaced image" src="https://tky-chat-work-appdata.s3.amazonaws.com/avatar/ico_default_violet.png" />
            <b>Room Metro #3</b>
          </a>
        </div>
      </div>
    );
  }
}