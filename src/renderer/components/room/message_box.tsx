/// <reference path="../../../typings/tsd.d.ts" />

/// <reference path="../../global.ts" />

import * as React from 'react';
import * as $ from 'jquery';

import {Global} from '../../global';

export class MessageBox extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="ui bottom fixed menu">
        <div className="item filled-item">
          <div className="ui form filled">
            <div className="sixteen wide field">
              <input type="text" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}