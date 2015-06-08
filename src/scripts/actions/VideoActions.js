'use strict';

import { Action } from 'geiger';
import axios from 'axios';

import { VideoRecord } from '../records';

const serverFetchVideos = async (apiendpoint, channelId) => {
    let videos = await axios.get(apiendpoint + '/videos?mode=channel&channelId=' + channelId);
    return videos.data.map(o => new VideoRecord(o));
};

const serverFetchVideosBySearch = async (apiendpoint, query) => {
    let videos = await axios.get(apiendpoint + '/videos?mode=search&query=' + query);
    return videos.data.map(o => new VideoRecord(o));
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

    async fetchVideosBySearch(query) {
        const videos = await serverFetchVideosBySearch(this.apiendpoint, query);
        this.emit('fetchVideos', videos);
    }
}
