import React from 'react';
import he from 'he';
//used to render HTML elements in the comment
import renderHTML from 'react-render-html';

const convertNumber = (num) => {
  return num < 1000? num : Math.round(num / 100) / 10 + `K`
}

const CommentBox = ({comment}) => {
  if(!comment) {
    return <div></div>;
  }

  const detail = comment.snippet.topLevelComment.snippet;
  return (
    <div className="comment">
      <a className="avatar" href="!#">
        <img src={detail.authorProfileImageUrl} alt="user profile"/>
      </a>
      <div className="content">
        <a className="author" href="!#">{detail.authorDisplayName}</a>
        <div className="metadata">
          <span className="date">{detail.updatedAt}</span>
        </div>
        <div className="text" >
          {renderHTML(he.decode(detail.textDisplay))}
        </div>
        <div className="like-display">{convertNumber(detail.likeCount)} &#9829;</div>
        {/*
        <div className="actions">
          <a className="reply" >Reply</a>
        </div>
        */}

      </div>
    </div>
  )
}

export default CommentBox;
