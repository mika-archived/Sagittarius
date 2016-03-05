/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';

interface MeProps {
  
}

export class Me extends React.Component<MeProps, {}> {
  render(): JSX.Element {
    return (
      <div className="item">
        <img className="ui mini middle aligned rounded right spaced image" src="https://tky-chat-work-appdata.s3.amazonaws.com/avatar/969/969476.rsz.png" />
        <b>Mika</b>
      </div>
    );
  }
}