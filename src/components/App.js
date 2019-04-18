import React from 'react';
import { Route } from 'react-router-dom';
import SideBarTab from './SideBar/SideBarTab';
import Welcome from './Welcome/Welcome';
import YouTube from './YouTube/YouTubeApp';
import Twitter from './Twitter/TwitterApp';
import './SideBar/SideBar.css'

class App extends React.Component {
  state = {isSideBarOpen: false};

  toogleSideBar = () => {
    var toogle = !this.state.isSideBarOpen;
    this.setState({isSideBarOpen:toogle});
  }

  render() {
    return(
      <div>
        <SideBarTab isSideBarOpen = {this.state.isSideBarOpen} toogleSideBar = {this.toogleSideBar}/>
        <Route path="/" exact component={Welcome} />
        <Route path="/youtube" exact component={YouTube} />
        <Route path="/twitter" exact component={Twitter} />
      </div>
    );
  };
}

export default App;
