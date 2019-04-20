import React from 'react';

const TweetHighlight = ({tweet}) => {
  if(!tweet)
    return(<div>Loading...</div>);

  function adjustTime(time){
    let index = time.indexOf('+');
    return time.slice(0,index);
  }

  return(
    <div className=" ui card highlight">
      <div className="image">
        <img src={tweet.user.profile_banner_url} alt="Account Logo"/>
      </div>
      <div className="content">
        <div className="header">{tweet.user.name}</div>
        <div className="meta">
          <span className="date">Joined at {adjustTime(tweet.user.created_at)}</span>
        </div>
        <div className="description">
          {tweet.user.screen_name} was orignally created at {tweet.user.location}.

        </div>
      </div>
      <div className="extra content">
        <i className="user icon"></i>
        {tweet.user.followers_count}
      </div>
    </div>
    )
}

export default TweetHighlight;
