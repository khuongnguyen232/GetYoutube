import React from 'react'

class SearchBar extends React.Component {
  state = {searchKey:null};

  onSubmitChange = (event) => {
    event.preventDefault();
    //TODO: make sure to call a Callback
    this.props.onFormSubmit(this.state.searchKey);
  };

  onInputChange = (event) => {
      this.setState({searchKey:event.target.value})
  };

  render() {
    return(
      <div className = "ui segment">
        <form className = "ui icon input youtube-query" onSubmit ={this.onSubmitChange}>
          <div className="ui label">
            <i className="fab fa-youtube fa-2x"></i>
          </div>
            <input type = "text" onChange = {this.onInputChange} placeholder="Enter search term"/>
            <i className="search icon"></i>
        </form>
      </div>
    )
  }
}

export default SearchBar;
