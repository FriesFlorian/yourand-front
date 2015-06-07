'use strict';

import React from 'react/addons';
import SearchBar from '../UI/SearchBar';
import YoutubePlayer from '../Video/YoutubePlayer';

export default class InterfaceSearch extends React.Component {
    static contextTypes = {
        videostore: React.PropTypes.object.isRequired
    };

    componentWillMount() {
        this.unwatchVideostore = this.context.videostore.watch(this.forceUpdate.bind(this));
    };

    componentWillUnmount() { this.unwatchVideostore(); }

    render() {

        const { videostore } = this.context;

        const videos = videostore.getVideos();

        return (
            <div>
                <SearchBar />
                {videos.length > 0 && (
                    <YoutubePlayer video={videos[0]} />
                )}
            </div>
        );
    }
}
