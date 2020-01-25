import React from 'react';
import he from 'he';

import Comment from '../Comment/Comment';
import Spinner from '../Spinner';
import API from '../../api/youtube';


class VideoDetail extends React.Component {
  state = {video:null};

  loadVidStat = async () => {
    if(this.props.video) {
      try {
        const response = await API.get('./videos', {
          params: {
            part:'statistics',
            id:this.props.video.id.videoId
          }
        });
        this.setState({video:response.data.items[0]})
      }catch(err) {
        console.log(err);
      }
    }
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.video !== prevProps.video) {
      this.loadVidStat();
    }
  }

  render() {
  if(!this.props.video) return <Spinner />

  const VideoSrc = `https://www.youtube.com/embed/${this.props.video.id.videoId}`;
    const title = he.decode(this.props.video.snippet.title);
    if(this.state.video) {
      return(
        <div>
          <div className = "ui embed">
            <iframe title = "video player" src ={VideoSrc} allowFullScreen/>
          </div>
          <div className = "ui segment">
            <h4 className = "ui header"> {title}</h4>
            <div className = "info-text">{this.props.video.snippet.description}</div>
            <div className="stat-section">
            <div className="view-count">{this.state.video.statistics.viewCount} views</div>
            <div id="float-right">
              <div class="ui labeled button">
                <div class="ui red button no-cursor">
                  <i class="thumbs up icon"></i> Like
                </div>
                <div class="ui basic red left pointing label no-cursor">
                  {this.state.video.statistics.likeCount}
                </div>
              </div>

              <div class="ui labeled button">
                <div class="ui black button no-cursor">
                  <i class="thumbs down icon"></i> Dislike
                </div>
                <div class="ui basic black left pointing label no-cursor">
                  {this.state.video.statistics.dislikeCount}
                </div>
              </div>
            </div>
          </div>
         </div>
          <Comment id={this.props.video.id.videoId}/>
        </div>
      );
    } else return <Spinner />

  }
};

export default VideoDetail;
