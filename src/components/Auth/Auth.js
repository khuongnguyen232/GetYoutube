import React from 'react';
import API from '../../api/youtube';
//to get the token API : auth.currentUser.get().getAuthResponse()

class Auth extends React.Component {
  state = {token:null};

  componentDidMount(){
    window.gapi.load('client:auth2', () => {
      window.gapi.client.init({
        clientId:'1027296414176-djc1k46fvc08hs81vek0hb7na5v5cn2j.apps.googleusercontent.com',
        scope:'https://www.googleapis.com/auth/youtube.force-ssl'
      })
      .then( () => {
        window.gapi.client.setApiKey('AIzaSyBomPyOWNJu7xSDDwoJIjHLlQqiEgVSv94');
        this.auth = window.gapi.auth2.getAuthInstance();
        //this.onAuthChange(this.auth.isSignedIn.get());
        //this.auth.isSignedIn.listen(this.onAuthChange);
      })
    });
  }

  onSignInClick = () => {
    this.auth.signIn();
    this.setState({token:this.auth.currentUser.get().getAuthResponse().access_token})
  };

  onSignOutClick = () => {
    this.auth.signOut();
  };

addComment = async (token) => {
  console.log(token);
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
};

  render() {
    return(
      <div>
        <button className="ui red google button" onClick ={this.onSignOutClick}>
          <i className="google icon" />
          Sign Out
        </button>

        <button className="ui red google button" onClick ={this.onSignInClick}>
          <i className="google icon" />
          Sign In
        </button>

        <button onClick= { () => {this.addComment(this.state.token)}}>
          Add Comment
        </button>
      </div>
    )
  }
}

export default Auth;
