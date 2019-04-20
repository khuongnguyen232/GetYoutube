import React from 'react';
import Twitter from '../../api/twitter';
import Header from './Header.js';
import TweetList from './TweetList';
import './Header.css';
import './Tweet.css';

class App extends React.Component {
  state = {name:'Marvel' , count:'5' , list:[]};

  onLoadAPI = async () => {
    const response = await Twitter.get('/',{
      params: {
        name:this.state.name,
        count:this.state.count
      }
    });
    this.setState({list:response.data.tweets});
  }

  onNameUpdate = (term) => {
    this.setState({name:'ManUtd'}, () => {
      this.onLoadAPI();
    });
  }

  onCountUpdate = (term) => {
    this.setState({count:term});
    this.onLoadAPI();
  }

  componentDidMount() {
    this.onLoadAPI();
  }

  render() {
    return(
        <div className = "twitter">

          <div className = "ui container">
            <Header />
            <TweetList list = {this.state.list}/>
            <button className ="tweet-list" type="button" onClick ={this.onNameUpdate}>Change name</button>
          </div>
        </div>
    )
  }
}

export default App;
