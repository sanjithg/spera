import React from 'react';

const whyChooseUs = (props) => (
  <div className="media">
      <div className="media-left">
          <a href="#">
              <i className={props.icon} aria-hidden="true"></i>
          </a>
      </div>
      <div className="media-body">
          <a href="#">{props.heading}</a>
          <p>{props.description}</p>
      </div>
  </div>
)

export default whyChooseUs;
