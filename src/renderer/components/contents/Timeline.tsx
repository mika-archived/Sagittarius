/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';
import {Message} from '../../models/Message';

interface TimelineProps {
  messages: Message[];
}

export class Timeline extends React.Component<TimelineProps, {}> {
  render(): JSX.Element {
    return (
      <div>
        Contents Area.
      </div>
    );
  }
}