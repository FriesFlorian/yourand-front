'use strict';

import { Store } from 'geiger';
import Immutable from 'immutable';

export default class VideoStore extends Store {

    constructor({ actions }) {

        super();
        this.videos = Immutable.Map();

        /*
        * Registering action handlers
        * Intentionnaly made private (just use the actions !)
        */
        this.listen(actions, 'fetchVideos', videos => {
            this.videos = Immutable.Map();
            for(let video of videos) {
                this.videos = this.videos.set(video.get('id'), video);
            }
            this.changed();
        });
    }

    // Public API

    getVideos() { return this.videos.toArray(); }
}
