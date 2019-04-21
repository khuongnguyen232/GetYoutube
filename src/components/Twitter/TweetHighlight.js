import React from 'react';

const TweetHighlight = ({tweet}) => {
  if(!tweet)
    return(<div>Loading...</div>);

  function adjustTime(time){
    let index = time.indexOf('+');
    return time.slice(0,index);
  }

  return(
    <div className="ui card highlight">
      <div className="image">
        <img src={tweet.user.profile_banner_url} alt="Account Logo"/>
      </div>
      <div className="content">
        <img className="ui avatar image" alt ="Twitter Icon" src={tweet.user.profile_image_url_https} />
        <div className="header">{tweet.user.name}</div>
        <div className="meta">
          <span className="date">Joined at {adjustTime(tweet.user.created_at)}</span>
        </div>
        <div className="description">
          {tweet.user.description}.
        </div>
      </div>
      <div className="content">
        <i class="users icon"></i>
        {tweet.user.followers_count}
        <i className="user icon"></i>
        {tweet.user.friends_count}
      </div>
    </div>
    )
}

export default TweetHighlight;
