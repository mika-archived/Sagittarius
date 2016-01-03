/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import * as $ from 'jquery';

export class AuthDialog extends React.Component<any, any> {
  
  componentDidMount() {
    // Semantic UI .d.ts
    $('.ui.modal')
      .modal('setting', 'closable', false)
      .modal('show');
  }
  
  render() {
    return (
      <div className="ui modal">
      <div className="header">Header</div>
      <div className="content">
        <p></p>
        <p></p>
        <p></p>
      </div>
    </div>
    );
  }
}