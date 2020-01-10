import React from 'react';
import SearchBar from './SearchBar';
import Youtube from '../../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';

class App extends React.Component {
  state = {videos: [], selectedVideo : null, numVid:10};

  onTermSubmit = async (term) => {
      const response = await Youtube.get('/search', {
      params: {
        q: term,
        maxResults:this.state.numVid
      }
    });

    this.setState(
      {videos:response.data.items ,
      selectedVideo:response.data.items[0]
    });
  };

  onVideoSelect = (video) => {
    this.setState({selectedVideo:video});
  };

  clickMoreVideoButton = () => {
    let newNumVid = this.state.numVid + 10;
    this.setState({numVid:newNumVid}, () => {
      this.onTermSubmit('Marvel');
    });
  }

  componentDidMount() {
    this.onTermSubmit('Marvel');
  }

  render() {
    return(
          <div className = "ui container">
            <SearchBar onFormSubmit = {this.onTermSubmit} />

            <div className="ui grid">
              <div className = "ui row">
                <div className = "eleven wide column">
                  <VideoDetail video = {this.state.selectedVideo} />
                </div>
                <div className = "five wide column">
                  <VideoList onVideoSelect = {this.onVideoSelect} videos = {this.state.videos} clickMoreVideoButton={this.clickMoreVideoButton}/>
                </div>
              </div>
            </div>
          </div>
    )
  }
}

export default App;
