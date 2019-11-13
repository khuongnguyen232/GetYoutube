import React from 'react';

let link = '#';

function adjustTime(time){
  let index = time.indexOf('+');
  return time.slice(0,index);
}

function adjustText(text){
  let index = text.indexOf("https");
  link = text.substr(index,text.length-1);
  console.log(link);
  return text.slice(0,index);
}

const TweetCard = ({tweet}) => {
  if(!tweet)
    return(<div>Loading...</div>);

  return(
    <div className = "four wide column">
      <div className="ui card">
        <div className="content">
          <div className="right floated meta">{adjustTime(tweet.created_at)}</div>
          <img className="ui avatar image" alt ="Twitter Icon" src={tweet.user.profile_image_url_https} /> {tweet.user.screen_name}
        </div>
        <div className="image">
          {adjustText(tweet.text)}
          <a href = {link}>To Tweet</a>
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
    </div>
  );
};

export default TweetCard;
