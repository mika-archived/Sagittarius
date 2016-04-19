/// <reference path="../../typings/tsd.d.ts" />

import * as React from "react";
import {t} from "../models/I18N";

interface AuthenticateProps {

}

export class Authenticate extends React.Component<AuthenticateProps, {}> {
  constructor() {
    super();
  }

  public render(): JSX.Element {
    return (
      <div className="ui modal">
        <div className="header">{t("application", "chatwork_auth")}</div>
        <div className="content">
          <div className="ui form">
            <div className="inline field">
              <label>{t("application", "api_token")}</label>
              <input id="form_apitoken" type="text" placeholder={t("application", "api_token_sample")} />
            </div>
          </div>
        </div>
        <div className="actions">
          <div className="ui green ok approve button">{t("application", "authenticate")}</div>
        </div>
      </div>
    );
  }
}
