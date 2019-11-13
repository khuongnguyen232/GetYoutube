import React from 'react';
import TweetCard from './TweetCard';
import TweetHighlight from './TweetHighlight';

const TweetList = ({list}) => {

  if(list.length === 0)
    return(<div>Loading...</div>);

  const updatedList = list.map( (tweet) => {
  return <TweetCard key={tweet.id} tweet={tweet} />;
  });

  return(
    <div className = "ui stackable centered grid container">
      <div class="sixteen wide column">
        <TweetHighlight tweet={list[0]} />
      </div>
      {updatedList}
    </div>
  )
}

export default TweetList;
