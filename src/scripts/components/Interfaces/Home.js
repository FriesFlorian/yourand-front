'use strict';

import React from 'react/addons';
import ChannelSearchBar from '../UI/ChannelSearchBar';
import ChannelList from '../Channel/ChannelList';

let InterfaceHome = React.createClass({
    render() {

        return (
            <div>
                <ChannelSearchBar />
                <ChannelList />
            </div>
        );
    }
});

module.exports = InterfaceHome;
