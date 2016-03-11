/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import {connect} from 'react-redux'
import {fetchMe} from '../actions/Chatwork';
import {Contents} from '../components/Contents';
import {SideBar} from '../components/SideBar';
import {Me} from '../models/Me';

interface AppFrameProps {
  dispatch?: Redux.Dispatch;
  me?: Me;
  selectChatRoom?: number;
}

class AppFrame extends React.Component<AppFrameProps, {}> {
  
  componentDidMount(): void {
    this.props.dispatch(fetchMe());
  }
  
  render(): JSX.Element {
    return (
      <div>
        <SideBar me={this.props.me} selectedChatRoom={this.props.selectChatRoom} />
        <Contents />
      </div>
    );
  }
}

function mapStateToProps(state: any): any {
  return {
    me: state.fetchMe,
    selectChatRoom: state.selectChatRoom
  } as AppFrameProps;
}

/*
function mapDispatchToProps(dispatch: any): any {
  console.log(dispatch);
  return {};
}
*/

export default connect(mapStateToProps/*, mapDispatchToProps*/)(AppFrame);