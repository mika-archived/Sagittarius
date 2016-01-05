/// <reference path="../../typings/tsd.d.ts" />

/// <reference path="../global.ts" />
/// <reference path="../models/account.ts" />


import * as React from 'react';
import * as $ from 'jquery';

import {Global} from '../global';
import {Account} from '../models/account';

export interface IUserProps {
  avatarImageUrl: string;
  name: string;
}

export class User extends React.Component<IUserProps, any> {
  constructor(props) {
    super(props);
    console.log(this.props);
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