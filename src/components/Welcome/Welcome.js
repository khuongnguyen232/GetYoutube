import React from 'react';
import Footer from './Footer'
import './Footer.css';
import youtube from './youtube.jpg';

const Welcome = () => {
  return(
    <div>
      <div className="ui segment fill-black">
        <h1 className = "ui container center aligned ">
          Feel free to check out my side
        </h1>
        <div className="ui center aligned grid">
          <h4>This project is built with:</h4>
            <div className="item">React</div>
            <div className="item">Semantic UI</div>
            <div className="item">HTML5</div>
            <div className="item">CSS3</div>
            <div className="item">Youtube API</div>
        </div>
      </div>
      <img src={youtube} alt="social media list" className="welcome-image"/>
      <Footer />
    </div>
  );
};

export default Welcome;
