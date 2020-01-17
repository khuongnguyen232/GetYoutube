import React from 'react';
import {connect} from 'react-redux';

import API from '../../api/youtube';

class UserComment extends React.Component {
  state = {text:''};

  onInputChange = (event) => {
    this.setState({text:event.target.value});
  }

  onSubmitChange = (event) => {
    event.preventDefault();
    //call API to insert comment here
    if(this.props.auth && this.state.text) {
      this.addComment(this.props.auth.token,this.state.text,this.props.id);
      this.setState({text:''});
    }
    //refresh the comment section to reload our comment
  };

  addComment = async (token,text,videoId) => {
    try {
      await API({method:'post',url:'/commentThreads',
      data:{
          snippet: {
            videoId: videoId,
            topLevelComment: {
              snippet: {
                textOriginal: text
              }
            }
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
  };

  render() {
    if(this.props.auth) {
      if(this.props.auth.isSignedIn) {
        return(
          <div id="commentgrid" className = "ui grid">
            <div className="two wide column">
              <img className="ui tiny circular image" src={this.props.auth.imageURL} alt="profile"/>
            </div>
            <div className="fourteen wide column">
              <form className = "ui icon input">
                <div className="field">
                  <textarea refs="comment" value={this.state.text} onChange={this.onInputChange}></textarea>
                  <button className="ui primary button" onClick={this.onSubmitChange}>Comment</button>
                </div>
              </form>
            </div>
          </div>
        )
      } else {
          return <h3 id="commentgrid">Please log in to comment</h3>
      }
    }
  }
}

const mapStateToProps = (state) => {
  return {auth:state.auth}
}

export default connect(mapStateToProps)(UserComment);
