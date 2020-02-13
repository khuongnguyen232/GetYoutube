import React from 'react';
import {connect} from 'react-redux';

import API from '../../api/youtube';

class UserReplyComment extends React.Component {
  state = {text:''}

  onSubmitChange = (event) => {
    event.preventDefault();
    if(this.props.auth && this.state.text) {
      this.insertReplyComment(this.props.auth.token,this.state.text,this.props.id);
      this.setState({text:''});
    }
  }

  insertReplyComment = async (token,text,commentId) => {
    try {
      await API({method:'post',url:'/comments',
      data:{
          snippet: {
            parentId:commentId,
            textOriginal:text
          }
        },
      headers:{
        'Authorization': `Bearer ${token}`,
        'Accept': 'application/json',
        'Content-Type':'application/json'
      }
      });
    } catch(err) {
      console.log(err);
    }
  }

  onInputChange = (event) => {
    this.setState({text:event.target.value});
  }

  render() {
    if(this.props.auth.isSignedIn) {
      return(
        <form className = "ui fluid icon input">
          <div className="field">
            <textarea refs="comment" value={this.state.text} onChange={this.onInputChange}></textarea>
            <button className="ui primary button" onClick={this.onSubmitChange}>Comment</button>
          </div>
        </form>
      )
    }
  }
}

const mapStateToProps = (state) => {
  return {auth:state.auth}
}

export default connect(mapStateToProps)(UserReplyComment);
