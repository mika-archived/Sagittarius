/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';

interface HeaderProps {
  
}

export class Header extends React.Component<HeaderProps, {}> {
  render(): JSX.Element {
    return (
      <div className="ui top borderless fixed menu">
        <div className="header item">
          Room Metro #1
        </div>
        <div className="right menu">
          <div className="horizontally fitted item">
            <i className="user icon"></i>
            10
          </div>
          <div className="item">
            <div className="circular ui icon basic button">
              <i className="info icon"></i>
            </div>
          </div>
          <div className="horizontally fitted item">
            <div className="ui icon input">
              <input type="text" placeholder="Search..." />
              <i className="search link icon"></i>
            </div>
          </div>
          <div className="item">
            <div className="circular ui icon basic button">
              <i className="ellipsis horizontal icon"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}