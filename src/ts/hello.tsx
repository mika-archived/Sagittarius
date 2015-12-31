/// <reference path="../typings/tsd.d.ts" />

import * as React from 'react';

interface IHelloProps {
    message: string;
}

/**
 * Hello
 */
class Hello extends React.Component<any, any> {
    constructor() {
        super();
    }
    
    render() {
        return (
            <div>
                <p>
                    Hello, World!
                </p>
            </div>
        );
    }
}

import * as ReactDom from 'react-dom';
ReactDom.render(<Hello />, document.getElementById("content"));