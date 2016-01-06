/// <reference path="../../typings/tsd.d.ts" />

/// <reference path="../global.ts" />
/// <reference path="../models/account.ts" />


import * as React from 'react';
import * as $ from 'jquery';

import {Global} from '../global';
import {Account} from '../models/account';

interface ILoginUserProps {
  avatarImageUrl: string;
  name: string;
}

export class LoginUser extends React.Component<ILoginUserProps, any> {
  constructor(props) {
    super(props);
  }
  
  render() {
    return (
      <div className="item">
        <img className="ui avatar image" src={this.props.avatarImageUrl} />
        <span>{this.props.name}</span>
      </div>
    );
  }
}