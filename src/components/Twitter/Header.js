import React from 'react';

import InputForm from './InputForm';

const Header = (props) => {
  return(
    <div className ="website-header">

      <div className="ui three column very relaxed stackable grid black inverted segment">
        <div className="center aligned column">
          <InputForm placeholder = "Enter the new tweet address" updateVariable = {props.onNameUpdate}/>
        </div>
        <div className="center aligned column">
          <i className ="fab fa-twitter header-icon fa-2x">Tweet Search</i>
        </div>
        <div className="center aligned column">
          <InputForm placeholder = "Enter the new number of tweets" updateVariable = {props.onCountUpdate}/>
        </div>
      </div>
    </div>
  )
}

export default Header;
