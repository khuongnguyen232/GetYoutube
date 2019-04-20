import React from 'react';
import { Link } from "react-router-dom";

const SideBar = (props) => {
  return(
    <div className="side-bar-wrapper ui vertical pointing menu">
      <Link to="/" className="item"><i className="fas fa-home fa-2x">Home</i></Link>
      <Link to="/youtube" className="item"><i className ="fab fa-youtube fa-2x">Youtube</i></Link>
      <Link to="/twitter" className="item"> <i className ="fab fa-twitter fa-2x">Twitter</i></Link>
    </div>
    )
}

export default SideBar;
