/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import {Me} from './sidebar/Me';
import {RoomList} from './sidebar/RoomList';

interface SideBarProps {
  
}

export class SideBar extends React.Component<SideBarProps, {}> {
  render(): JSX.Element {
    return (
      <div className="ui visible inverted left vertical sidebar menu">
        <Me />
        <RoomList />
      </div>
    );
  }
}