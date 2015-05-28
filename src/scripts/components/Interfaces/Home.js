'use strict';

import React from 'react/addons';
import ChannelSearchBar from '../UI/ChannelSearchBar';
import ChannelList from '../Channel/ChannelList';
import YoutubePlayer from '../Video/YoutubePlayer';

export default class InterfaceHome extends React.Component {
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
                <ChannelSearchBar />
                <ChannelList />
                {videos.length > 0 && (
                    <YoutubePlayer video={videos[0]} />
                )}
            </div>
        );
    }
}
