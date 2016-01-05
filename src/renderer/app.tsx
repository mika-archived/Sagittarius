/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import * as $ from 'jquery';

// async/await 
import "babel-polyfill";

import {Account} from './models/account';
import {AuthDialog} from './components/auth_dialog';
import {Global} from './global';
import {Root} from './components/root';

class App {
  
  constructor() {
    Account.load().then(() => {
      if(Global.ChatworkAccount == null) {
        ReactDOM.render(<AuthDialog />, document.getElementById('dialog'));
      } else {
        this.authenticated();
      }
    });
  }
  
  authenticated() {
    $('#dialog').remove();
    ReactDOM.render(<Root user={Global.ChatworkAccount} />, document.getElementById('root'));
  }
}

new App();