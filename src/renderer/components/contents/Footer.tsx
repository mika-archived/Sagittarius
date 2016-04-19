/// <reference path="../../../typings/tsd.d.ts" />

import * as $ from "jquery";
import * as React from "react";
import {t} from "../../models/I18N";

interface FooterProps {

}

export class Footer extends React.Component<FooterProps, {}> {

  public componentDidMount(): void {
    $(".dropdown.button").dropdown();
  }

  public render(): JSX.Element {
    return (
      <div className="ui bottom fixed one item menu">
        <div className="item custom spaced">
          <div className="ui left action right icon input">
            <div className="ui icon floating dropdown button">
              <i className="plus icon"></i>
              <div className="menu">
                <div className="item">
                  <i className="tasks icon"></i> {t("application", "chat_create_task")}
                </div>
              </div>
            </div>
            <input type="text" />
            <i className="smile link icon"></i>
          </div>
        </div>
      </div>
    );
  }
}
