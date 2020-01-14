import React from 'react';

import CommentBox from './CommentBox.js'
import Spinner from '../Spinner.js';

const CommentList = ({list,loadMoreComment}) => {
  if(!list) return <Spinner />

  const commentList = list.map((comment) => {
    return (
      <div key={comment.id}>
        <CommentBox comment={comment}/>
      </div>
    )
  });

  return (
    <div className="ui comments">
      <h3 className="ui diving header">Comments</h3>
      {commentList}
      <button className="fluid ui button" onClick={loadMoreComment}>Load more videos</button>
    </div>
  );
};



export default CommentList;
