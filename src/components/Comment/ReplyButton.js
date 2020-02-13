import React from 'react';
import UserReplyComment from './UserReplyComment';

class ReplyButton extends React.Component {
  state = {isReply:false}

  onButtonClick = () => {
    this.setState({isReply:!this.state.isReply})
  }

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
