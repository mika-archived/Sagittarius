/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import {Footer} from './contents/Footer';
import {Header} from './contents/Header';

interface ContentsProps {
  
}

export class Contents extends React.Component<ContentsProps, {}> {
  render(): JSX.Element {
    return (
      <div className="pusher" id="contents">
        <Header />
        <Footer />
        <div className="">
          Contents Area.
        </div>
      </div>
    )
  }
}