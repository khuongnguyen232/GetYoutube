import React from 'react';
import {connect} from 'react-redux';
import he from 'he';

import {setSelectedVideo} from '../../actions';

const VideoItem = ({video,setSelectedVideo}) => {
  const title = he.decode(video.snippet.title);
  return (
    <div onClick = {()=> {
      setSelectedVideo(video);
    }} className = "video-item item">
      <img className = "ui image " src ={video.snippet.thumbnails.medium.url} alt ={video.snippet.title}/>
      <div className = "content">
        <div className = "header">
          {title}
        </div>
      </div>
    </div>
  );
};

export default connect(null,{setSelectedVideo})(VideoItem);
