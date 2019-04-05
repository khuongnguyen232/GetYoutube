import React from 'react'
import VideoItem from './VideoItem'
const VideoList = ({videos}) => {
  const renderList = videos.map((video) => {
    return <VideoItem key = {video.id.videoId} video ={video} alt ="Youtube Thumbnails" />
  })
  return(
    <div>{renderList}</div>
  );
};

export default VideoList;
