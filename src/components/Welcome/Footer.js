import React from 'react';

const Footer = (props) => {
  return(
    <footer id="footer">
      <div className = "ui stackable center aligned grid no-margin">
          <p className ="column center aligned no-margin no-padding">Khuong Nguyen</p>
          <p className = "column center aligned no-margin no-padding">khuongnguyen232@gmail.com</p>
      </div>

      <div className ="ui three column grid social-container no-padding-top no-margin">
        <div className ="ui row">
          <a className="column right aligned" href = "https://www.facebook.com/kunnguyen93"><i className="fab fa-facebook-f ">Facebook</i></a>
          <a className="column center aligned" href = "https://www.linkedin.com/in/khuong-nguyen-849884141/"><i className="fab fa-linkedin-in">LinkedIn</i></a>
          <a className="column left aligned" href = "https://github.com/khuongnguyen232"><i className="fab fa-github">Github</i></a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
