/// <reference path="../../../typings/tsd.d.ts" />

import * as React from "react";
import {ChatMessage} from "./ChatMessage";
import {Message} from "../../models/Message";

interface TimelineProps {
  messages: Message[];
}

export class Timeline extends React.Component<TimelineProps, {}> {
  public render(): JSX.Element {
    const messages: JSX.Element[] = this.props.messages.map(w => {
      return <ChatMessage message={w} key={w.messageId} />;
    });
    return (
      <div className="ui comments srcollable">
        {messages}
      </div>
    );
  }
}
