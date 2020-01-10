
import React from 'react';
import { Route } from 'react-router-dom';

import Welcome from './Welcome/Welcome';
import YouTube from './YouTube/YouTubeApp';
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
        </div>
      </div>
    );
  };
}

export default App;
