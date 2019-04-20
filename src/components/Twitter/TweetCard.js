import React from 'react';

function adjustTime(time){
  let index = time.indexOf('+');
  return time.slice(0,index);
}

const TweetCard = ({tweet}) => {
  if(!tweet)
    return(<div>Loading...</div>);
    
  return(
    <div className="ui card">
      <div className="content">
        <div className="right floated meta">{adjustTime(tweet.created_at)}</div>
        <img className="ui avatar image" alt ="Twitter Icon" src={tweet.user.profile_image_url_https} /> {tweet.user.screen_name}
      </div>
      <div className="image">
        {tweet.text}
      </div>
      <div className="content">
        <span className="right floated">
          <i className="heart outline like icon"> </i>
          {tweet.favorite_count}
        </span>
        <i className="fas fa-retweet"> </i>
        {tweet.retweet_count}
      </div>
    </div>
  );
};

export default TweetCard;
