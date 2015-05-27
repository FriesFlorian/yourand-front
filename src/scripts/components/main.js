'use strict';

import React from 'react';
import Router, { Route, DefaultRoute } from 'react-router';
import { ContextFactory } from 'geiger';

import ChannelActions from '../actions/ChannelActions';
import ChannelStore from '../stores/ChannelStore';

import VideoActions from '../actions/VideoActions';
import VideoStore from '../stores/VideoStore';

import App from './App';
import InterfaceHome from './Interfaces/Home';
import InterfaceSearch from './Interfaces/Search';


require('../../styles/main.sass');

// Declaring our App Context
const Context = ContextFactory({
    user: React.PropTypes.object.isRequired,
    channelstore: React.PropTypes.object.isRequired,
    channelactions: React.PropTypes.object.isRequired,
    videostore: React.PropTypes.object.isRequired,
    videoactions: React.PropTypes.object.isRequired
});

// Fetching app config variables from the HTML page
const config = JSON.parse(window.unescape(document.getElementsByName('config/app')[0].content));

// Building Actions and Stores
const channelactions = new ChannelActions({ apiendpoint: config.apiendpoint });
const channelstore = new ChannelStore({ actions: channelactions });
const videoactions = new VideoActions({ apiendpoint: config.apiendpoint });
const videostore = new VideoStore({ actions: videoactions });

const Interfaces = (
    <Route name="home" path="/" handler={App}>
        <DefaultRoute handler={InterfaceHome} />
        <Route name="search" path="/s" handler={InterfaceSearch} />
      </Route>
);

Router.run(
    Interfaces,
    RouteHandler => React.render(
        (<Context
            user={config.user}
            channelstore={channelstore}
            channelactions={channelactions}
            videostore={videostore}
            videoactions={videoactions}
            render={() => <RouteHandler /> } />
        ),
        document.getElementById('app')
    )
);
