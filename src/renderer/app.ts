/// <reference path="../typings/tsd.d.ts" />

/// <reference path="components/sidebar" />

import * as React from 'react';
import * as ReactDOM from 'react-dom';

import c_sidebar = require('./renderer/components/sidebar');
import Sidebar = c_sidebar.Components.Sidebar;

class App {
  constructor() {
    ReactDOM.render(React.createElement(Sidebar, null), document.getElementById('sidebar'));
  }
}

new App();