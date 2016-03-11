/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import {Account} from './sidebar/Account';
import {RoomList} from './sidebar/RoomList';
import {Me} from '../models/Me';

interface SideBarProps {
  me?: Me;
  selectedChatRoom: number;
}

export class SideBar extends React.Component<SideBarProps, {}> {
  render(): JSX.Element {
    return (
      <div className="ui visible inverted left vertical sidebar menu">
        <Account me={this.props.me} />
        <RoomList selectedChatRoom={this.props.selectedChatRoom} />
      </div>
    );
  }
}