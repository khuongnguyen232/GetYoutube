import React from 'react';
import {connect} from 'react-redux';

import {signIn, signOut} from '../../actions';
import API from '../../api/youtube';
//to get the token API : auth.currentUser.get().getAuthResponse()

class Auth extends React.Component {

  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:'1027296414176-djc1k46fvc08hs81vek0hb7na5v5cn2j.apps.googleusercontent.com',
        scope:'https://www.googleapis.com/auth/youtube.force-ssl'
      })
      .then( () => {
        window.gapi.client.setApiKey('AIzaSyBomPyOWNJu7xSDDwoJIjHLlQqiEgVSv94');
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  }

  onSignInClick = () => {
    this.auth.signIn();
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

  onAuthChange = (isSignedIn) => {
    if(isSignedIn) {
      const user = this.auth.currentUser.get();
      this.props.signIn(
        user.getAuthResponse().access_token,
        user.getBasicProfile().getName(),
        user.getBasicProfile().getImageUrl()
      );
    } else {
      this.props.signOut();
    }
  };

addComment = async (token) => {
  const response = await API({method:'post',url:'/commentThreads',
  data:{
      snippet: {
        videoId: "M7FIvfx5J10",
        topLevelComment: {
          snippet: {
            textOriginal: "Test comment."
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
  //console.log(response);
};
  render() {
    if(this.props.auth) {
      return(
        <div className= "right menu">
        {this.props.auth.isSignedIn?
          <button className="ui red google button" onClick ={this.onSignOutClick}>
            <i className="google icon" />
            Sign Out
          </button>
          :
            <button className="ui red google button" onClick ={this.onSignInClick}>
              <i className="google icon" />
              Sign In
            </button>
        }
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => {
  //console.log(state);
  return { auth:state.auth};
};

export default connect(mapStateToProps,{ signIn, signOut })(Auth);
