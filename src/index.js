import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = 'your_api_key';


class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.onVideoSelect = this.onVideoSelect.bind(this);
        this.videoSearch('surfboards');
    }

    render() {
        const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

        return (
            <div>
                <SearchBar onSearchTermChange={ videoSearch } />
                <VideoDetail video={ this.state.selectedVideo }/>
                <VideoList
                    onVideoSelect={ this.onVideoSelect }
                    videos={ this.state.videos }/>
            </div>
        );
    }

    onVideoSelect(selectedVideo) {
        this.setState({ selectedVideo: selectedVideo });
    }

    videoSearch(term) {
        YTSearch({ key: API_KEY, term: term }, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
}

ReactDOM.render(<App />, document.querySelector('.container'));
