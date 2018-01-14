import React, { Component } from 'react';

class VideoDetail extends Component {
    constructor(props) {
        super(props);

        this.state = { video: props.video };
    }

    componentWillReceiveProps(nextProps, nextState) {
        this.setState({ video: nextProps.video });
        return true;
    }

    render() {
        if (!!this.state.video)
        {
            const urlVideo = 'https://www.youtube.com/embed/' + this.state.video.id.videoId;

            return (
                <div className="video-detail col-md-8">
                    <div className="embed-responsive embed-responsive-16by9">
                        <iframe className="embed-responsive-item" src={ urlVideo } >
                        </iframe>
                    </div>
                    <div className="details">
                        <div>{ this.state.video.snippet.title }</div>
                        <div>{ this.state.video.snippet.description }</div>
                    </div>
                </div>
            );
        }
        else
        {
            return (
                <div className="video-detail col-md-8">
                    Loading...
                </div>
            );
        }
    }

}

export default VideoDetail;
