'use strict';

import { Action } from 'geiger';
import axios from 'axios';

import { VideoRecord } from '../records';

const serverFetchVideos = async (apiendpoint, channelId) => {
    let videos = await axios.get(apiendpoint + '/videos?channelId=' + channelId);
    return videos.data.map(o => new VideoRecord(o));  // passed to the store after REST response (obviously)
};

export default class VideoActions extends Action {

    constructor({ apiendpoint }) {
        super();
        this.apiendpoint = apiendpoint;
    }

    async fetchVideos(channelId) {
        const videos = await serverFetchVideos(this.apiendpoint, channelId);
        this.emit('fetchVideos', videos);
    }
}
