/// <reference path="../../typings/tsd.d.ts" />

/// <reference path="../global.ts" />

import * as React from 'react';
import * as $ from 'jquery';

import {Global} from '../global';
import {Chatwork} from '../network/chatwork';

interface AuthDialogState {
  isDialogOpen: boolean;
  isApproving: boolean;
}

export class AuthDialog extends React.Component<any, AuthDialogState> {
    
  constructor() {
    super();
    this.state = {
      isDialogOpen: true,
      isApproving: false
    } as AuthDialogState;
      
    // ES6 classes no longer autobind 'this' to non React methods.
    this.onApprove = this.onApprove.bind(this);
  }
  componentDidMount() {
    if (this.state.isDialogOpen) {
      $('.ui.modal')
        .modal('setting', 'closable', false)
        .modal('setting', 'onApprove', this.onApprove)
        .modal('show');
    }
  }
    
  onApprove(element): boolean{
    // Validate
    if($("#token").val().length == 0) {
      return false;
    }
    this.setState({ isApproving: true, isDialogOpen: true}, () => {});
    $("#dialogState").removeClass("disabled").addClass("active");
    Global.Chatwork = new Chatwork($('#token').val());
    Global.Chatwork.me().then((v) => {
      Global.ChatworkAccount = v;
      $('.ui.modal').modal('hide');
    }).catch((r) => {
      // fail
    });
    return false;
  }
    
  render() {
    return (
      <div className="ui modal">
        <div className="ui disabled inverted dimmer" id="dialogState">
          <div className="ui text loader">確認中 ...</div>
        </div>
        <div className="header">認証</div>
        <div className="content">
          <p>Chatwork API トークンを入力してください</p>
          <div className="ui form">
            <div className="field">
              <label>API トークン</label>
              <input placeholder="YOUR_API_TOKEN" required={true} id="token"/>
            </div>
          </div>
        </div>
        <div className="actions">
          <div className="ui green approve button">認証</div>
        </div>
      </div>
    );
  }
}