/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import {Provider} from 'react-redux'
import configureStore from '../store/configureStore'
import AppFrame from './AppFrame';

const store = configureStore();

export default class Root extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <Provider store={store}>
        <AppFrame />
      </Provider>
    );
  }
}