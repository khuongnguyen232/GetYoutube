import React from 'react';
import {connect} from 'react-redux';

import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import {fetchVideoList} from '../../actions';
import './Video.css';

//the base Component for /youtube URL
class App extends React.Component {
  //selectedVideo state will be displayed in the video player
  state = {selectedVideo : null, numVid:20};

  onVideoSelect = (video) => {
    this.setState({selectedVideo:video});
  };

  clickMoreVideoButton = () => {
    let newNumVid = this.state.numVid + 10;
    this.setState({numVid:newNumVid}, () => {
      this.props.fetchVideoList(this.state.numVid);
    });
  }

 componentDidMount() {
   this.props.fetchVideoList(this.state.numVid);
 }

 //contain the search bar, video player, list of video
  render() {
    return(
      <div className = "ui container">
        <SearchBar onTermSubmit = {() => {this.props.fetchVideoList(this.state.numVid)}} fetchVideoList={this.props.fetchVideoList}/>

        <div className="ui stackable grid">
          <div className = "ui row">
            <div className = "eleven wide column">
              <VideoDetail video={this.props.selectedVideo}/>
            </div>
            <div className = "five wide column">
              <VideoList videos = {this.props.videoList} clickMoreVideoButton={this.clickMoreVideoButton}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {videoList:state.videoList.items,selectedVideo:state.selectedVideo};
}
export default connect(mapStateToProps,{fetchVideoList})(App);
