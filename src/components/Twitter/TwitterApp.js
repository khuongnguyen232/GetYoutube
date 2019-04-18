import React from 'react';
import Twitter from '../../api/twitter';
import Header from './Header.js';
import TweetList from './TweetList';
import './Header.css';
import './Tweet.css';

class App extends React.Component {
  state = {name:'Marvel' , count:'5' , list:[]};

  onStartInit = async () => {
    const response = await Twitter.get('/');
    this.setState({list:response.data.tweets});
  }

  componentDidMount() {
    this.onStartInit();
  }

  render() {
    return(
        <div className = "twitter">
          <div className = "ui container">
            <Header />
            <TweetList list = {this.state.list}/>
          </div>
        </div>
    )
  }
}

export default App;
