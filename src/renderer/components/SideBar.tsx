/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';

interface SideBarProps {
  
}

export class SideBar extends React.Component<SideBarProps, {}> {
  render(): JSX.Element {
    return (
      <div className="ui sidebar inverted vertical gray visible menu">
        <div className="item">
          <img className="ui mini middle aligned rounded right spaced image" src="https://tky-chat-work-appdata.s3.amazonaws.com/avatar/969/969476.rsz.png" />
          <b>Mika</b>
        </div>
        <div className="item">
          <div className="header">
            Chat Lists
          </div>
          <div className="menu">
            <a href="#" className="item">
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
      </div>
    );
  }
}