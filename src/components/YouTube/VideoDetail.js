import React from 'react';
import Spinner from '../Spinner';

const VideoDetail = ({video}) => {
  if(!video)
  return(
    <Spinner />
  );

const VideoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return(
    <div>
      <div className = "ui embed">
        <iframe title = "video player" src ={VideoSrc} allowFullScreen/>
      </div>
      <div className = "ui segment">
        <h4 className = "ui header"> {video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};


export default VideoDetail;
