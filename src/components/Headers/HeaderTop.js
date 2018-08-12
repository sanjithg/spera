import React from 'react';

const headerTop = (props) => (
  <section className="top_header_area">
    <div className="container">
          <ul className="nav navbar-nav top_nav">
              <li><a><i className="fa fa-phone"></i>+91 9494413431</a></li>
              <li><a><i className="fa fa-envelope-o"></i>speraconsultants@gmail.com</a></li>
          </ul>
          <ul className="nav navbar-nav navbar-right social_nav">
              <li><a href="https://www.facebook.com/"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
              <li><a href="https://twitter.com/"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
              <li><a href="https://plus.google.com/"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
              <li><a href="https://www.instagram.com/"><i className="fa fa-instagram" aria-hidden="true"></i></a></li>
              <li><a href="https://in.pinterest.com/"><i className="fa fa-pinterest-p" aria-hidden="true"></i></a></li>
              <li><a href="https://www.linkedin.com/"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
          </ul>
    </div>
</section>
)

export default headerTop;
