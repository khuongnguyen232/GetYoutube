import React from 'react';
import API from '../../api/youtube';

class Comment extends React.Component {
  getComment = async () => {
    const response = await API.get('/commentThreads',{
      params:{
      videoId:this.props.id,
      order:'relevance'
    }});
    console.log(response);
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
      <h1>Comment Section</h1>
    )
  }
}

export default Comment;
