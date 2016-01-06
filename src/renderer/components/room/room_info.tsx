/// <reference path="../../../typings/tsd.d.ts" />

/// <reference path="../../global.ts" />

import * as React from 'react';
import * as $ from 'jquery';

import {Global} from '../../global';
import {Room} from '../../models/room';

interface IRoomInfoProp {
  room: Room;
}

export class RoomInfo extends React.Component<IRoomInfoProp, any> {
  constructor(props) {
    super(props);
  }
  
  componentDidMount() {
    $('.jq-popup').popup();
  }
  
  componentDidUpdate() {
    $('.jq-popup').popup();
  }
  
  render() {
    var members = this.props.room.members.map((v) => {
      return (
        <img className="ui avatar image jq-popup" src={v.avatarImageUrl} data-content={v.name} key={v.userId}/>
      );
    });
    return (
      <div className="ui top fixed borderless menu">
        <div className="item">
          {this.props.room.name}
        </div>
        <div className="right menu">
          <div className="item">
            {members}
          </div>
        </div>
      </div>
    );
  }
}