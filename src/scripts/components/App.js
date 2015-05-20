'use strict';

import React from 'react/addons';
import { RouteHandler } from 'react-router';

export default class App extends React.Component {

    static contextTypes = {
        channelactions: React.PropTypes.object.isRequired
    };

    render() {
        return (
            <div className='main container'>
                <RouteHandler />
            </div>
        );
    }
}
