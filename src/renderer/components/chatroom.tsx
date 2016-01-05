/// <reference path="../../typings/tsd.d.ts" />

/// <reference path="../global.ts" />

import * as React from 'react';
import * as $ from 'jquery';

import {Global} from '../global';

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