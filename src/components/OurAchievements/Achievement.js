import React from 'react';

const achievement = (props) => (
  <div className="col-md-3 col-sm-6 p0 completed">
      <i className={props.icon} aria-hidden="true"></i>
      <span className="counter">{props.counter}</span>
      <h6>{props.heading}</h6>
  </div>
);

export default achievement;
