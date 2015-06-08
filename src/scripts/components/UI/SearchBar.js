'use strict';

import React from 'react/addons';

export default class SearchBar extends React.Component {

    static contextTypes = {
        videoactions: React.PropTypes.object.isRequired
    };

    constructor() {
        super();
        this.state = { value: '' };
    }

    render() {

        const { videoactions } = this.context;

        const handleChange = (e) => {
            this.setState({value: e.target.value});
        };

        const handleSubmit = (e) => {
            e.preventDefault();
            if(this.state.value.trim() === '') { return; }
            videoactions.fetchVideosBySearch(this.state.value);
        };

        const handleClick = () => {
            videoactions.fetchVideosBySearch(this.state.value);
        };

        return (
            <div>
                <form action="#" onSubmit={handleSubmit} >
                    <input type="text" className="searchbar" placeholder="Search for something..." autoComplete="off" value={this.state.value} onChange={handleChange} />
                </form>
                <div className="channel-list">
                    <div className="channel-item" onClick={handleClick}>Search for <strong>{this.state.value}</strong></div>
                </div>
            </div>
        );
    }
}
