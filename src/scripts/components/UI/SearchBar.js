'use strict';

import React from 'react/addons';

let SearchBar = React.createClass({

    getInitialState() { return { value: '' }; },

    render() {

        const handleChange = () => {
            /*this.props.flux.getActions('todos').serverSearchChannels(e.target.value);
            this.setState({value: e.target.value});*/
        };

        return (
            <form action="#">
                <input type="text" className="searchbar" placeholder="Search for something..." autoComplete="off" value={this.state.value} onChange={handleChange} />
            </form>
        );
    }
});

module.exports = SearchBar;
