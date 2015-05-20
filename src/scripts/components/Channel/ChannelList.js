'use strict';

import React from 'react/addons';

export default class ChannelList extends React.Component {

    static contextTypes = {
        channelstore: React.PropTypes.object.isRequired,
        channelactions: React.PropTypes.object.isRequired
    };

    componentWillMount() {
        this.unwatchChannelstore = this.context.channelstore.watch(this.forceUpdate.bind(this));
    }

    componentWillUnmount() { this.unwatchChannelstore(); }

    render() {

        const { channelstore } = this.context;

        const channels = channelstore.getChannels();

        return (
            <div className="channel-list">
                {channels.map((channel) =>
                    <a className="result_item" href key={channel.get('id')}><img src={channel.get('thumbnail')} alt="profile pic" title="" /> {channel.label()}</a>
                )}
            </div>
        );
    }

}
