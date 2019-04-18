import React from 'react';
import SideBar from './SideBar';

const SideBarTab = (props) => {
  return(

    <div>
      {
        props.isSideBarOpen?
        <SideBar className/> :
        <div></div>
      }
      <button className="toogle-btn" type="button" onClick = {props.toogleSideBar}>
        Toogle SideBar
      </button>

    </div>
    )
}

export default SideBarTab;
