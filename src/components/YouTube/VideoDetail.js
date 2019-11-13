import React from 'react';

const VideoDetail = ({video}) => {
  if(!video)
  return(
    <div class="ui segment">
      <div class="ui active inverted dimmer">
        <div class="ui massive text loader">Loading</div>
      </div>
      <p></p>
    </div>
  );

const VideoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

  return(
    <div>
      <div className = "ui embed">
        <iframe title = "video player" src ={VideoSrc} />
      </div>
      <div className = "ui segment">
        <h4 className = "ui header"> {video.snippet.title}</h4>
        <p>{video.snippet.description}</p>
      </div>
    </div>
  );
};

export default VideoDetail;
