import React, {Component} from 'react';
import VideoListItem from './video_list_item';

class VideoList extends Component {

    updateVideosState(videos, onVideoSelect) {
       this.setState({
            videos: videos.map((video) => {
                return (
                    <VideoListItem
                        onVideoClick={ onVideoSelect }
                        key={ video.etag }
                        video={ video } />
                );
            }, { onVideoSelect })
        });
    }

    constructor(props) {
        super(props);

        this.state = {
            videos: []
        };

    }

    componentWillReceiveProps(nextProps, nextState) {
        this.updateVideosState(nextProps.videos, nextProps.onVideoSelect);
        return true;
    }

    render() {
        return (
            <ul className="col-md-4 list-group">
                { this.state.videos }
            </ul>
        );
    }
}

export default VideoList;
