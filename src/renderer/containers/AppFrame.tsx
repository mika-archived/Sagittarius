/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import {connect} from 'react-redux'
import {Contents} from '../components/Contents';
import {SideBar} from '../components/SideBar';

interface AppFrameProps {
  dispatch?: Redux.Dispatch;
}

class AppFrame extends React.Component<AppFrameProps, {}> {
  
  componentDidMount(): void {
    
  }
  
  render(): JSX.Element {
    return (
      <div>
        <SideBar />
        <Contents />
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