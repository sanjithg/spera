import React from 'react';
import speraLogo from '../assets/images/spera-logo.png';
import { Image } from 'react-bootstrap';

const logo = (props) => (
      <Image className={props.cssClass} src = {speraLogo}/>
);

export default logo;
