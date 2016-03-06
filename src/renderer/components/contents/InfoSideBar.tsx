/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';

interface InfoSideBarProps {
  
}

export class InfoSideBar extends React.Component<InfoSideBarProps, {}> {
  render(): JSX.Element {
    return (
      <div id="infoSideBar" className="ui right sidebar vertical inverted menu overlay">
        <div className="header item">
          <p>Room Information</p>
        </div>
      </div>
    );
  }
}