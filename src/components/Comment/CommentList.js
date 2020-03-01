import React from 'react';

import CommentBox from './CommentBox';
import Spinner from '../Spinner';
import UserComment from './UserComment';

//check for empty list, get error if remove it
const CommentList = ({list,loadMoreComment,id}) => {
  if(!list) return <Spinner />

  const commentList = list.map((comment) => {
    return (
      <div key={comment.id}>
        <CommentBox comment={comment}/>
      </div>
    )
  });

  //include a box for user to comment and list of all comments, with a button to load more comments
  return (
    <div className="ui comments comment-list">
      <UserComment id={id}/>
      {commentList}
      <button className="fluid ui button" onClick={loadMoreComment}>Load more comments</button>
    </div>
  );
};



export default CommentList;
