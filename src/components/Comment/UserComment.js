import React from 'react';
import {connect} from 'react-redux';

class UserComment extends React.Component {
  state = {text:null};

  onInputChange = (event) => {
    this.setState({text:event.target.value});
  }

  onSubmitChange = (event) => {
    event.preventDefault();
    //call API to insert comment here

    //refresh the comment section to reload our comment
  };

  render() {
    if(this.props.auth) {
      if(this.props.auth.isSignedIn) {
        return(
          <div id="commentgrid" className = "ui grid">
            <div className="two wide column">
              <img className="ui tiny circular image" src={this.props.auth.imageURL} />
            </div>
            <div className="fourteen wide column">
              <form className = "ui icon input">
                <div className="field">
                  <textarea onChange={this.onInputChange}></textarea>
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
