/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import {connect} from 'react-redux'

interface AppFrameProps {
  dispatch?: Redux.Dispatch;
}

class AppFrame extends React.Component<AppFrameProps, {}> {
  render(): JSX.Element {
    return (
      <div>
        Hello, world!
      </div>
    );
  }
}

function mapStateToProps(state: any): any {
  return {};
}

function mapDispatchToProps(dispatch: any): any {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AppFrame);