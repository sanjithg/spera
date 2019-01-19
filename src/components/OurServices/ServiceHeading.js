import React from 'react';

const serviceHeading = (props) => (
  <li className={props.active} onClick={() => props.clicked(props.heading)}>
    <a href="/"> {props.heading}</a>
  </li>
);



export default serviceHeading;
