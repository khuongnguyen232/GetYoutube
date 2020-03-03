import React from 'react';
import VideoItem from './VideoItem';
import Spinner from '../Spinner';

const VideoList = ({videos, onVideoSelect,clickMoreVideoButton}) => {
  if(!videos) {
    return (
      <Spinner />
    )
  }

  const renderList = videos.map((video) => {
    return <VideoItem key = {video.id.videoId} video={video} onVideoSelect={onVideoSelect} alt ="Youtube Thumbnails" />
  })

  // a list of around 10 video, with load more button
  return(
    <div className="ui relaxed divided list">
      {renderList}
      <button className="fluid ui button" onClick={clickMoreVideoButton}>Load more videos</button>
    </div>

  );
};

export default VideoList;
