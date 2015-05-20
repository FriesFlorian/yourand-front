'use strict';

import React from 'react/addons';

export default class ChannelSearchBar extends React.Component {

    static contextTypes = {
        channelactions: React.PropTypes.object.isRequired
    };

    constructor() {
        super();
        this.state = { value: '' };
    }

    render() {

        const { channelactions } = this.context;

        const handleChange = (e) => {
            this.setState({value: e.target.value});
            if(this.state.value.trim() === '') { return; }
            channelactions.fetchChannels(e.target.value);
        };

        return (
            <form action="#">
                <input type="text" className="searchbar" placeholder="Type the name of a Youtube channel..." autoComplete="off" value={this.state.value} onChange={handleChange} />
            </form>
        );
    }
}
