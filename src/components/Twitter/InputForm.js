import React from 'react';

class InputForm extends React.Component {
  state = {text:null};

  onSubmitChange = (event) => {
    event.preventDefault();
    this.props.updateVariable(this.state.text);
  }

  onInputChange = (event) => {
    this.setState({text:event.target.value});
  };

  render() {
    return(
      <form className = "ui icon input new-query" onSubmit ={this.onSubmitChange}>
      <div className="ui label">
        {this.props.label}
      </div>
        <input type = "text" onChange = {this.onInputChange} placeholder="Enter search term"/>
        <i className="search icon"></i>
      </form>
    );
  };
};

export default InputForm;
