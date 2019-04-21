import React from 'react';
import SideBar from './SideBar';

const SideBarTab = (props) => {
  return(
    <div className = "ui vertical pointing menu">
      {
        props.isSideBarOpen?
        <SideBar/>:
        <div></div>
      }
      <button className="toogle-btn ui primary button" type="button" onClick = {props.toogleSideBar}>
        Toogle SideBar
      </button>
    </div>
    )
}

export default SideBarTab;
