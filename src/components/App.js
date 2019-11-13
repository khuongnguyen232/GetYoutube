
import React from 'react';
import { Route } from 'react-router-dom';

import Welcome from './Welcome/Welcome';
import YouTube from './YouTube/YouTubeApp';
import Twitter from './Twitter/TwitterApp';
import Header from './Header/Header';

class App extends React.Component {
  toogleSideBar = () => {
    var toogle = !this.state.isSideBarOpen;
    this.setState({isSideBarOpen:toogle});
  }

  render() {
    return(
      <div>
        <Header />
        <div id = "content">
          <Route path="/" exact component={Welcome} />
          <Route path="/youtube" exact component={YouTube} />
          <Route path="/twitter" exact component={Twitter} />
        </div>
      </div>
    );
  };
}

export default App;
