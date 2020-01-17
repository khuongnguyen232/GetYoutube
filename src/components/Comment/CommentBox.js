import React from 'react';
import he from 'he';
//used to render HTML elements in the comment
import renderHTML from 'react-render-html';

const convertNumber = (num) => {
  return num < 1000? num : Math.round(num / 100) / 10 + `K`
}

const convertTime = (time) => {
  const [date,hour] = time.replace('T','.').split('.');
  return date + ' ' + hour;
}

const CommentBox = ({comment}) => {
  if(!comment) {
    return <div></div>;
  }
  const detail = comment.snippet.topLevelComment.snippet;
  return (
    <div className="comment">
        <a className="avatar" href={detail.authorChannelUrl} target="_blank" rel="noopener noreferrer">
        <img className="ui image" src={detail.authorProfileImageUrl} alt="user profile"/>
      </a>
      <div className="content">
        <a className="author" href={detail.authorChannelUrl } target="_blank" rel="noopener noreferrer">{detail.authorDisplayName}</a>
        <div className="metadata">
          <span className="date">{convertTime(detail.updatedAt)}</span>
        </div>
        <div className="text" >
          {renderHTML(he.decode(detail.textDisplay))}
        </div>
        <div className="like-display">
          {convertNumber(detail.likeCount)}
          <i className="thumbs up outline icon"></i>
        </div>

      </div>
    </div>
  )
}

export default CommentBox;
