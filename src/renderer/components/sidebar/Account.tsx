/// <reference path="../../../typings/tsd.d.ts" />

import * as React from 'react';
import {Me} from '../../models/Me';

interface AccountProps {
  me?: Me;
}

export class Account extends React.Component<AccountProps, {}> {
  render(): JSX.Element {
    var me  = this.props.me;
    if(me == null) {
      me = new Me({
        avatar_image_url: "https://tky-chat-work-appdata.s3.amazonaws.com/avatar/ico_default_violet.png",
        name: ""
      });
    }
    return (
      <div className="item">
        <img className="ui mini middle aligned rounded right spaced image" 
          src={me.avatarImageUrl} />
        <b>{me.name}</b>
      </div>
    );
  }
}