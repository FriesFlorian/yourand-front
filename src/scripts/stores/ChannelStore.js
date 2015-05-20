'use strict';

import { Store } from 'geiger';
import Immutable from 'immutable';

export default class ChannelStore extends Store {

    constructor({ actions }) {

        super();
        this.channels = Immutable.Map();

        /*
        * Registering action handlers
        * Intentionnaly made private (just use the actions !)
        */
        this.listen(actions, 'fetchChannels', channels => {
            this.channels = Immutable.Map();
            for(let channel of channels) {
                this.channels = this.channels.set(channel.get('id'), channel);
            }
            this.changed();
        });
    }

    // Public API

    getChannels() { return this.channels.toArray(); }
}
