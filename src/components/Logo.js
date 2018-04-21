import React from 'react';
import speraLogo from '../assets/images/spera-logo.png';
import { Image } from 'react-bootstrap';

const logo = (props) => (
    <div className='Container'>
      <Image className={props.cssClass} src = {speraLogo}/>
    </div>
);

export default logo;
