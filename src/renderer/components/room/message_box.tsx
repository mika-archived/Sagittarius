/// <reference path="../../../typings/tsd.d.ts" />

/// <reference path="../../global.ts" />

import * as React from 'react';
import * as $ from 'jquery';

import {Global} from '../../global';
import {Room} from '../../models/room';

interface IMessageBoxProps {
  room: Room;
  message: string;
}

export class MessageBox extends React.Component<IMessageBoxProps, any> {
  constructor(props) {
    super(props);
  }
  
  private getKey(): string {
    return 'room-' + this.props.room.roomId;
  }
  
  componentDidMount() {
    $('#chatText').keypress(e => {
      if(e.keyCode == 13 /* ENTER */) {
        $('#formRoot').addClass('loading');
        Global.Chatwork.newRoomMessage(this.props.room.roomId, $('#chatText').val()).then(() => {
          $('#chatText').val('');
          $('#formRoot').removeClass('loading');
        }).catch(() => {
          $('#chatText').popup('toggle');
          $('#formRoot').removeClass('loading');
        });
        return false;
      }
    });
  }
  
  componentWillUpdate() {
   var text = $('#chatText').val();
   if(text != null && text != '') {
     localStorage.setItem(this.getKey(), text);
   }
   $('#chatText').val('');
  }
  
  componentDidUpdate() {
    if(localStorage.getItem(this.getKey())) {
      var text = localStorage.getItem(this.getKey());
      localStorage.removeItem(this.getKey());
      $('#chatText').val(text);
    }
  }
  
  componentWillReceiveProps(nextProps) {
    $('#chatText').val(nextProps.message + '¥n');
  }
  
  render() {
    return (
      <div className="ui bottom fixed menu">
        <div className="item filled-item">
          <div className="ui form filled" id="formRoot">
            <div className="sixteen wide field">
              <input type="text" id="chatText" data-content="Error occurred during sending message."/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}