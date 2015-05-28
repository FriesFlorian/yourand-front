'use strict';

import React from 'react';

export default class YoutubePlayer extends React.Component {

    static propTypes = {
        video: React.PropTypes.object
    };

    render() {
        const { video } = this.props;

        return (
            <div className="video-player">
                <h2>{video.get('title')}</h2>
                <iframe
                    className="embedded_video fullwidth"
                    width="640"
                    height="360"
                    src={"//www.youtube.com/embed/"+video.get('id')}
                    frameBorder="0"
                    allowFullScreen>
                </iframe>
            </div>
        );
    }
}
