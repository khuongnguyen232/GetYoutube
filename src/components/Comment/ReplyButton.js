import React from 'react';
import UserReplyComment from './UserReplyComment';

class ReplyButton extends React.Component {
  //if isReply true, add a textbox below the reply button for user to type in
  state = {isReply:false}

  onButtonClick = () => {
    this.setState({isReply:!this.state.isReply})
  }

  //include a reply button with conditional textbox
  render() {
    return(
      <React.Fragment>
        <div className="reply-button" onClick={this.onButtonClick}> Reply </div>
        {this.state.isReply && <UserReplyComment id={this.props.id}/>}
      </React.Fragment>
    )
  }
}

export default ReplyButton;
