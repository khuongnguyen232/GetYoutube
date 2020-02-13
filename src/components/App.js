import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Welcome from './Welcome/Welcome';
import YouTube from './YouTube/YouTubeApp';
import Header from './Header/Header';

class App extends React.Component {

  render() {
    return(
      <Router>
        <Header />
        <div id = "content">
            <Route exact path="/" component={Welcome} />
            <Route path="/youtube" component={YouTube} />
        </div>

      </Router>
    );
  };
}

export default App;
