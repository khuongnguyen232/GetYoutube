import React from 'react';
import {connect} from 'react-redux';
import {CLIENT_ID} from '../../googleKey';

import {signIn, signOut} from '../../actions';
//to get the token API : auth.currentUser.get().getAuthResponse()

//need to include <script src="https://apis.google.com/js/api.js"></script> in the index.html page to use this API
class Auth extends React.Component {

  //set up the Auth Object here, the scope content is a MUST HAVE to run POST requests (like insert)
  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:CLIENT_ID,
        scope:'https://www.googleapis.com/auth/youtube.force-ssl'
      })
      .then( () => {
        this.auth = window.gapi.auth2.getAuthInstance();
        this.onAuthChange(this.auth.isSignedIn.get());
        this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  }

  onSignInClick = () => {
    if(this.auth) {
      this.auth.signIn();
    }
  };

  onSignOutClick = () => {
    if(this.auth) {
      this.auth.signOut();
    }
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

  //display Sign In and Sign Out button depend on state: auth.isSignedIn
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
  return { auth:state.auth};
};

export default connect(mapStateToProps,{ signIn, signOut })(Auth);
