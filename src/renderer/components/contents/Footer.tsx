/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';

interface FooterProps {
  
}

export class Footer extends React.Component<FooterProps, {}> {
  render(): JSX.Element {
    return (
      <div className="ui bottom fixed one item menu">
        <div className="item custom spaced">
          <div className="ui left action right icon input">
            <div className="ui button">Go</div>
            <input type="text" />
            <i className="search link icon"></i>
          </div>
        </div>
      </div>
    );
  }
}