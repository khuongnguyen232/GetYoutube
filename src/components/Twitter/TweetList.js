import React from 'react';
import TweetCard from './TweetCard';
import TweetHighlight from './TweetHighlight';

const TweetList = ({list}) => {

  if(list.length === 0)
    return(
      <div class="ui segment">
        <div class="ui active inverted dimmer">
          <div class="ui massive text loader">Loading</div>
        </div>
        <p></p>
      </div>
    );

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
