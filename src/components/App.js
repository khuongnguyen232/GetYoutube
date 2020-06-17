import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import YouTube from './YouTube/YouTubeApp';
import Header from './Header/Header';

class App extends React.Component {

  render() {
    return(
      <Router>
        <Header />
        <div id = "content">
            <Route exact path="/" component={YouTube} />
        </div>

      </Router>
    );
  };
}

export default App;
