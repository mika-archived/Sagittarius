/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import {Footer} from './contents/Footer';
import {Header} from './contents/Header';
import {InfoSideBar} from './contents/InfoSideBar';
import {Timeline} from './contents/Timeline';

interface ContentsProps {
  
}

export class Contents extends React.Component<ContentsProps, {}> {
  render(): JSX.Element {
    return (
      <div className="pusher" id="contents">
        <Header />
        <Footer />
        <div className="timeline">
          <Timeline />
        </div>
        <InfoSideBar />
      </div>
    )
  }
}