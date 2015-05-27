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
        console.log(this.context);
        this.unwatchVideostore = this.context.videostore.watch(this.forceUpdate.bind(this));
    };

    componentWillUnmount() { this.unwatchVideostore(); }

    render() {

        const { videostore } = this.context;

        const videos = videostore.getVideos();

        let player = "";

        if(videos[0] !== undefined) {
             player = <YoutubePlayer video={videos[0]} />;
        }

        return (
            <div>
                <ChannelSearchBar />
                <ChannelList />
                {player}
            </div>
        );
    }
}
