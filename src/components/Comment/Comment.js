import React from 'react';

import API from '../../api/youtube';
import CommentList from './CommentList';
import './Comment.css';

class Comment extends React.Component {
  state = {commentList:[],commentCount:10,sortType:'relevance'}

  //will be called inside CommentList component
  loadMoreComment = () => {
    let newCount = this.state.commentCount + 10;
    this.setState({commentCount:newCount},() => {
      this.getComment()
    });
  }

  //grab all the comments for VideoDetail component only
  getComment = async () => {
    try {
      const response = await API.get('/commentThreads',{
        params:{
        videoId:this.props.id,
        order:this.state.sortType,
        maxResults:this.state.commentCount
      }});
      if(response.status === 200) {
        this.setState({commentList:response.data.items})
      }
    } catch(err) {
      console.log(err);
    }
  }
  componentDidMount() {
    this.getComment();
  }

  onSortButtonClick = (value) => {
    this.setState({sortType:value}, () => {
      this.getComment();
    });
  }

  //MUST run this method to refresh comment after a new video is loaded
  componentDidUpdate(prevProps) {
    // Typical usage (don't forget to compare props):
    if (this.props.id !== prevProps.id) {
      this.getComment();
    }
  }
  //sort button and a list of all comments
  render() {
    return (
      <div>
        <div className="ui text menu">
          <div className="item">
            <h3 className="ui diving header">Comments</h3>
          </div>
          <div className="ui buttons">
            <button className="ui button" onClick={() => this.onSortButtonClick('relevance')}>Popular</button>
            <div className="or"></div>
            <button className="ui button" onClick={() => this.onSortButtonClick('time')}>Newest</button>
          </div>
        </div>
        <CommentList list={this.state.commentList} loadMoreComment={this.loadMoreComment} id={this.props.id}/>
      </div>
    )
  }
}

export default Comment;
