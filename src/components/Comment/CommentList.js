import React from 'react';

import CommentBox from './CommentBox';
import Spinner from '../Spinner';
import UserComment from './UserComment';

const CommentList = ({list,loadMoreComment,id}) => {
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
      <UserComment id={id}/>
      {commentList}
      <button className="fluid ui button" onClick={loadMoreComment}>Load more comments</button>
    </div>
  );
};



export default CommentList;
