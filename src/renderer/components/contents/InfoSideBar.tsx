/// <reference path="../../../typings/tsd.d.ts" />

import * as $ from "jquery";
import * as React from "react";
import {MemberList} from "./MemberList";
import "../../extensions/StringExt";
import {Contact} from "../../models/Contact";
import {t} from "../../models/I18N";
import {Room} from "../../models/Room";

interface InfoSideBarProps {
  room: Room;
  members: Contact[];
}

export class InfoSideBar extends React.Component<InfoSideBarProps, {}> {

  public componentDidMount(): void {
    $(".ui.accordion").accordion();
    $(".ui.checkbox").checkbox();
  }

  public render(): JSX.Element {
    return (
      <div>
        <div className="header item">
          <h3>{t("application", "chat_about").format(this.props.room.name)}</h3>
        </div>
        <div className="item">
          <div className="ui inverted fluid accordion">
            <div className="title">
              <h4>
                <i className="dropdown icon"></i>
                <i className="teal circular inverted info icon"></i>
                {t("application", "chat_details")}
              </h4>
            </div>
            <div className="content">
              <div className="ui inverted list">
                <div className="item">
                  <div className="header">{t("application", "chat_description")}</div>
                  <p>
                    {this.props.room.description}
                  </p>
                </div>
              </div>
            </div>
            <div className="title">
              <h4>
                <i className="dropdown icon"></i>
                <i className="blue circular inverted users icon"></i>
                {t("application", "chat_members")}
              </h4>
            </div>
            <MemberList members={this.props.members} />
            <div className="title">
              <h4>
                <i className="dropdown icon"></i>
                <i className="brown circular inverted settings icon"></i>
                {t("application", "chat_preferences")}
              </h4>
            </div>
            <div className="content">
              <div className="form inverted ui">
                <div className="field">
                  <div className="ui checkbox">
                    <input className="hidden" type="checkbox" tabIndex="0" />
                    <label>{t("application", "chat_enable_notify")}</label>
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
