import React from 'react';

const headerTop = (props) => (
  <section className="top_header_area">
    <div className="container">
          <ul className="nav navbar-nav top_nav">
              <li><a href="#"><i className="fa fa-phone"></i>+1 (168) 314 5016</a></li>
              <li><a href="#"><i className="fa fa-envelope-o"></i>spera@gmail.com</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right social_nav">
              <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
              <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
          </ul>
    </div>
</section>
)

export default headerTop;
