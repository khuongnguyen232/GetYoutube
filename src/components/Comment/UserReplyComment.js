import React from 'react';
import {connect} from 'react-redux';

import API from '../../api/youtube';
//similar to UserComment, with some slight differences
class UserReplyComment extends React.Component {
  //text is for user comment
  state = {text:''}

  onSubmitChange = (event) => {
    event.preventDefault();
    if(this.props.auth && this.state.text) {
      this.insertReplyComment(this.props.auth.token,this.state.text,this.props.id);
      this.setState({text:''});
    }
  }

  //token is from Redux state, text is from internal state, commentId is props passed from parent
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

  //display a text box with ability to push a comment to Youtube server
  render() {
    if(this.props.auth.isSignedIn) {
      return(
        <form className = "ui fluid icon input">
          <div className="field">
            <textarea refs="comment" value={this.state.text} onChange={this.onInputChange}></textarea>
            <button className="ui button" onClick={this.onSubmitChange}>Reply</button>
          </div>
        </form>
      )
    } else {
      return <React.Fragment></React.Fragment>
    }
  }
}

const mapStateToProps = (state) => {
  return {auth:state.auth}
}

export default connect(mapStateToProps)(UserReplyComment);
