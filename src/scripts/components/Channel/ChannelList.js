'use strict';

import React from 'react/addons';

export default class ChannelList extends React.Component {

    static contextTypes = {
        channelstore: React.PropTypes.object.isRequired,
        channelactions: React.PropTypes.object.isRequired,
        videoactions: React.PropTypes.object.isRequired
    };

    componentWillMount() {
        this.unwatchChannelstore = this.context.channelstore.watch(this.forceUpdate.bind(this));
    }

    componentWillUnmount() { this.unwatchChannelstore(); }

    render() {

        const { channelstore, channelactions, videoactions } = this.context;

        const channels = channelstore.getChannels();

        const handleClick = (channel) => {
            channelactions.keepCurrent(channel);
            videoactions.fetchVideos(channel.id);
        };

        return (
            <div className="channel-list">
                {channels.map((channel) =>
                    <div className="channel-item" href="" key={channel.get('id')} onClick={handleClick.bind(this, channel)}><img src={channel.get('thumbnail')} alt="profile pic" title="" /> {channel.label()}</div>
                )}
            </div>
        );
    }

}
