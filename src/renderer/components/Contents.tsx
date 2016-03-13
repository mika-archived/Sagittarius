/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Footer} from './contents/Footer';
import {Header} from './contents/Header';
import {InfoSideBar} from './contents/InfoSideBar';
import {Timeline} from './contents/Timeline';
import {Room} from '../models/Room';

interface ContentsProps {
  room: Room;
}

export class Contents extends React.Component<ContentsProps, {}> {
  
  /* React Lifecycle */
  componentDidUpdate(prevProps: ContentsProps, prevState: any): void {
    var side = (
      <InfoSideBar room={this.props.room} />
    );
    ReactDOM.render(side, document.getElementById("side"));
  }
  
  render(): JSX.Element {
    return (
      <div className="pusher" id="contents">
        <Header room={this.props.room} />
        <Footer />
        <div className="timeline">
          <Timeline />
        </div>
      </div>
    )
  }
}