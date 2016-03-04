/// <reference path="../typings/tsd.d.ts" />

import 'babel-polyfill';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import Root from './containers/Root';

class Application {
  constructor() {
    ReactDOM.render(<Root />, document.getElementById('root'));
  }
}

new Application();