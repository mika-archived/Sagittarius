/// <reference path="../../typings/tsd.d.ts" />

/// <reference path="../models/account.ts" />


import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';

import {Account} from '../models/account';
import {User} from './user';

interface IRootProps {
  user: Account;
}

export class Root extends React.Component<IRootProps, any> {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div>
        <div className="ui sidebar vertical menu visible">
          <User avatarImageUrl={this.props.user.avatarImageUrl} name={this.props.user.name} />
        </div>
        <div className="pusher">
        </div>
      </div>
    );
  }
}