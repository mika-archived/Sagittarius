/// <reference path="../../../typings/tsd.d.ts" />

import * as $ from 'jquery';
import * as React from 'react';
import {MemberList} from './MemberList';
import {Room} from '../../models/Room';

interface InfoSideBarProps {
  room: Room;
}

export class InfoSideBar extends React.Component<InfoSideBarProps, {}> {
  
  componentDidMount(): void {
    $('.ui.accordion').accordion();
    $('.ui.checkbox').checkbox();
  }
  
  render(): JSX.Element {
    return (
      <div id="infoSideBar" className="ui right sidebar vertical inverted menu overlay">
        <div className="header item">
          <h3>About Room Metro #1</h3>
        </div>
        <div className="item">
          <div className="ui inverted fluid accordion">
            <div className="title">
              <h4>
                <i className="dropdown icon"></i>
                <i className="teal circular inverted info icon"></i>
                Room Details
              </h4>
            </div>
            <div className="content">
              <div className="ui inverted list">
                <div className="item">
                  <div className="header">Description</div>
                  <p>
                    .NET Developer Group
                  </p>
                </div>
              </div>
            </div>
            <div className="title">
              <h4>
                <i className="dropdown icon"></i>
                <i className="blue circular inverted users icon"></i>
                Members
              </h4>
            </div>
            <MemberList members={this.props.room.members} />
            <div className="title">
              <h4>
                <i className="dropdown icon"></i>
                <i className="brown circular inverted settings icon"></i>
                Preferences
              </h4>
            </div>
            <div className="content">
              <div className="form inverted ui">
                <div className="field">
                  <div className="ui checkbox">
                    <input className="hidden" type="checkbox" tabIndex="0" />
                    <label>Enable Desktop Notification</label>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}