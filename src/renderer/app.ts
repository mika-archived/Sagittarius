/// <reference path="../typings/tsd.d.ts" />

/// <reference path="components/sidebar" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import c_sidebar = require('./renderer/components/sidebar');
import c_dialog = require('./renderer/components/auth_dialog');

class App {
  constructor() {
    ReactDOM.render(React.createElement(c_sidebar.Sidebar, null), document.getElementById('sidebar'));
    ReactDOM.render(React.createElement(c_dialog.AuthDialog, null), document.getElementById('root'));
  }
}

new App();