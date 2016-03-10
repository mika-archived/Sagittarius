/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import {Provider} from 'react-redux'
import {DummyMe} from '../models/DummyMe';
import configureStore from '../store/configureStore'
import AppFrame from './AppFrame';

const store = configureStore({
  fetchMe: new DummyMe()
});

export default class Root extends React.Component<{}, {}> {
  render(): JSX.Element {
    return (
      <Provider store={store}>
        <AppFrame />
      </Provider>
    );
  }
}