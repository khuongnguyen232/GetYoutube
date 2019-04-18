import React from 'react';
import Twitter from '../../api/twitter';

class App extends React.Component {
  state = {name:'Marvel' , count:'5' , tweetList:[]};

  onStartInit = async () => {
    const response = await Twitter.get('/');
    this.setState({tweetList:response.data.tweets});
  }

  componentDidMount() {
    this.onStartInit();
  }

  render() {
    return(
          <div>
            Right now, we have {this.state.tweetList.length} tweets.
          </div>
    )
  }
}

export default App;
