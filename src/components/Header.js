import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import Logo from './Logo';
import {Grid, Row, Col, Clearfix} from 'react-bootstrap';

const header = () =>(


  <div>
    <Navbar inverse>
      <a href="/"><Logo cssClass='main-logo'/></a>
    </Navbar>
  </div>
);

export default header;
