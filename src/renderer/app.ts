/// <reference path="../typings/tsd.d.ts" />

/// <reference path="./components/sidebar" />
/// <reference path="./components/auth_dialog" />



import * as React from 'react';
import * as ReactDOM from 'react-dom';

// async/await 
import "babel-polyfill";

import {Sidebar} from './components/sidebar';
import {AuthDialog} from './components/auth_dialog';

class App {
  constructor() {
    ReactDOM.render(React.createElement(Sidebar, null), document.getElementById('sidebar'));
    ReactDOM.render(React.createElement(AuthDialog, null), document.getElementById('root'));
  }
}

new App();