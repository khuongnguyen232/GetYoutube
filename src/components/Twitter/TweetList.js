import React from 'react';
import TweetCard from './TweetCard';

const TweetList = ({list}) => {
  const updatedList = list.map( (tweet) => {
    return <TweetCard key={tweet.id} tweet={tweet} />;
  });

  return(
    <div className="tweet-list">{updatedList}</div>
  )
}

export default TweetList;
