import React from 'react';
import {connect} from 'react-redux';

import SearchBar from './SearchBar';
import Youtube from '../../api/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import {fetchVideoList} from '../../actions';

class App extends React.Component {
  state = {selectedVideo : null, numVid:10};

  onTermSubmit = async (term) => {
    this.props.fetchVideoList(this.state.numVid);
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
    this.props.fetchVideoList(this.state.numVid);
  }

  render() {
    console.log(this.props.videoList);
    return(
          <div className = "ui container">
            <SearchBar onFormSubmit = {this.onTermSubmit} fetchVideoList={this.props.fetchVideoList}/>

            <div className="ui grid">
              <div className = "ui row">
                <div className = "eleven wide column">
                  <VideoDetail video = {this.state.selectedVideo} />
                </div>
                <div className = "five wide column">
                  <VideoList onVideoSelect = {this.onVideoSelect} videos = {this.props.videoList} clickMoreVideoButton={this.clickMoreVideoButton}/>
                </div>
              </div>
            </div>
          </div>
    )
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return {videoList:state.videoList.items}
}
export default connect(mapStateToProps,{fetchVideoList})(App);
