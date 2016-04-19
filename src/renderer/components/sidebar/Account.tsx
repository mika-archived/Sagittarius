/// <reference path="../../../typings/tsd.d.ts" />

import * as React from "react";
import {Me} from "../../models/Me";

interface AccountProps {
  me?: Me;
}

export class Account extends React.Component<AccountProps, {}> {
  public render(): JSX.Element {
    return (
      <div className="item">
        <img className="ui mini middle aligned rounded right spaced image"
             src={this.props.me.avatarImageUrl} />
        <b>{this.props.me.name}</b>
      </div>
    );
  }
}
