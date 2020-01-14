import React from 'react';

import API from '../../api/youtube';
import CommentList from './CommentList';
import './Comment.css';

class Comment extends React.Component {
  state = {commentList:[],commentCount:10}

  getComment = async () => {
    try {
      const response = await API.get('/commentThreads',{
        params:{
        videoId:this.props.id,
        order:'relevance',
        maxResults:this.state.commentCount
      }});
      if(response.status === 200) {
        this.setState({commentList:response.data.items})
        console.log(response.data.items);
      }
    } catch(err) {
      console.log(err);
    }
  }
  componentDidMount() {
    this.getComment();
  }

  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.id !== prevProps.id) {
      this.getComment();
    }
  }

  render() {
    return (
      <div>
        <CommentList list={this.state.commentList} />
      </div>
    )
  }
}

export default Comment;
