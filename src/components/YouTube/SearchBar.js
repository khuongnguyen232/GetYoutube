import React from 'react'

class SearchBar extends React.Component {
  state = {searchKey:null , openSideBar:false};

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
      <div className = "search-bar ui segment">
        <form className = "ui form" onSubmit = {this.onSubmitChange}>
          <div className = "field">
            <label>Video Search</label>
            <input type = "text" onChange = {this.onInputChange} />
          </div>
        </form>
      </div>
    )
  }
}

export default SearchBar;
