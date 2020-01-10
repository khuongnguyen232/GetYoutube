import React from 'react';
import VideoItem from './VideoItem';
import './VideoList.css';

const VideoList = ({videos, onVideoSelect,clickMoreVideoButton}) => {
  const renderList = videos.map((video) => {
    return <VideoItem key = {video.id.videoId} video={video} onVideoSelect={onVideoSelect} alt ="Youtube Thumbnails" />
  })
  return(
    <div className="ui relaxed divided list">
      {renderList}
      <button className="fluid ui button" onClick={clickMoreVideoButton}>Load more videos</button>
    </div>

  );
};

export default VideoList;
