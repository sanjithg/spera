import React from 'react';

const whyChooseUs = (props) => (
  <div className="media">
      <div className="media-left">
          <a>
            <i className={props.icon} aria-hidden="true"></i>
          </a>
      </div>
      <div className="media-body">
          <a>{props.heading}</a>
          <p>{props.description}</p>
      </div>
  </div>
)

export default whyChooseUs;
