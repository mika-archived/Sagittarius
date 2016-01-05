/// <reference path="../../typings/tsd.d.ts" />

/// <reference path="../global.ts" />

import * as React from 'react';
import * as $ from 'jquery';

import {Global} from '../global';
import {Room} from '../models/room';

interface IChatroomProps {
  room: Room;
}

export class Chatroom extends React.Component<any, any> {
  constructor() {
    super();
  }
  
  render() {
    return (
      <a className="item"></a>
    );
  }
}