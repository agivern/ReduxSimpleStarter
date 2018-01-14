import React, {Component} from 'react';

class VideoListItem extends Component {
    constructor(props) {
        super(props);

        this.state = {
            video: props.video
        };
    }

    render() {
        return (
            <li onClick={ () => this.onVideoClick(this.state.video) } className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={ this.state.video.snippet.thumbnails.default.url } />
                    </div>
                </div>

                <div className="media-body">
                    <div className="media-heading">
                        { this.state.video.snippet.title }
                    </div>
                </div>
            </li>
        );
    }

    onVideoClick(video) {
        this.props.onVideoClick(video);
    }
}

export default VideoListItem;
