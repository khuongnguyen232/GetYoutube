import React from 'react';
import he from 'he';

import Comment from '../Comment/Comment';
import Spinner from '../Spinner';

const VideoDetail = ({video}) => {
  if(!video)
  return(
    <Spinner />
  );
const VideoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;
  const title = he.decode(video.snippet.title);
  return(
    <div>
      <div className = "ui embed">
        <iframe title = "video player" src ={VideoSrc} allowFullScreen/>
      </div>
      <div className = "ui segment">
        <h4 className = "ui header"> {title}</h4>
        <p>{video.snippet.description}</p>
      </div>
      <Comment id={video.id.videoId}/>
    </div>
  );
};

export default VideoDetail;
