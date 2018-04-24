import React from 'react';

const feature = (props) => (
  <div className="col-md-3 col-sm-6 builder">
    <i className={props.icon} aria-hidden="true"></i>
    <h4>{props.heading}</h4>
    <p>{props.description}</p>
  </div>
)

export default feature;
