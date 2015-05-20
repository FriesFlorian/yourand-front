'use strict';

import { Action } from 'geiger';
import axios from 'axios';

import { ChannelRecord } from '../records';

const serverFetchChannels = async (apiendpoint, name) => {
    if(name.length > 2) {
        let channels = await axios.get(apiendpoint + '/channels?name=' + name);
        return channels.data.map(o => new ChannelRecord(o));  // passed to the store after REST response (obviously)
    }
    return [];
};

export default class ChannelActions extends Action {

    constructor({ apiendpoint }) {
        super();
        this.apiendpoint = apiendpoint;
    }

    async fetchChannels(name) {
        const channels = await serverFetchChannels(this.apiendpoint, name);
        this.emit('fetchChannels', channels);
    }
}
