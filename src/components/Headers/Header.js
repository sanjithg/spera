import React from 'react';
import { Navbar, Button } from 'react-bootstrap';
import Logo from '../Logo';
import ToolBar  from '../ToolBar';
import HeaderTop  from './HeaderTop';

const header = () =>(
  <div>
  <HeaderTop/>
    <nav className="navbar navbar-default header_aera" id="main_navbar">
      <div className="container"  data-spy="affix" data-offset-top="205">
          <div className="searchForm">
              <form action="#" className="row m0">
                  <div className="input-group">
                      <span className="input-group-addon"><i className="fa fa-search"></i></span>
                      <input type="search" name="search" className="form-control" placeholder="Type & Hit Enter"/>
                      <span className="input-group-addon form_hide"><i className="fa fa-times"></i></span>
                  </div>
              </form>
          </div>
          <div className="col-md-2 p0">
              <div className="navbar-header">
                  <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#min_navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  </button>
                  <a className="navbar-brand" href="index.html"><a href="/"><Logo cssClass='main-logo'/></a></a>
              </div>
          </div>

          <div className="col-md-10 p0">
              <div className="collapse navbar-collapse" id="min_navbar">
                  <ul className="nav navbar-nav navbar-right">
                      <li><a href="/home" className="dropdown-toggle" data-toggle="dropdown">Home</a></li>
                      <li><a href="/aboutUs" className="dropdown-toggle" data-toggle="dropdown">About Us</a></li>
                      <li><a href="/services" className="dropdown-toggle" data-toggle="dropdown">Services</a></li>
                      <li><a href="/gallery">Gallery</a></li>
                      <li><a href="/blog" className="dropdown-toggle" data-toggle="dropdown">Blog</a></li>
                      <li><a href="/contact">Contact</a></li>
                      <li><a className="nav_searchFrom"><i className="fa fa-search"></i></a></li>
                  </ul>
              </div>
          </div>
      </div>
  </nav>
  </div>
);

export default header;
