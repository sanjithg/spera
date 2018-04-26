import React from 'react';

const serviceHeading = (props) => {
  console.log(props);
  return(<li className={props.active} onClick={() => props.clicked(props.heading)}><a href="javascript:void(0);"> {props.heading}</a></li>);
}


export default serviceHeading;
