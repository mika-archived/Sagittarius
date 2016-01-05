/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import * as $ from 'jquery';

export class Sidebar extends React.Component<any, any> {
      
  constructor() {
    super();
  }
      
  componentDidMount() {    
  }
      
  render() {
    return (
      <a className="item">Room 1</a>
    );
  }
}