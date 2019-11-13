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
      <form className = "ui icon fluid input new-query" onSubmit ={this.onSubmitChange}>
        <input type = "text" onChange = {this.onInputChange} placeholder={this.props.placeholder}/>
        <i className="search icon"></i>
      </form>
    );
  };
};

export default InputForm;
