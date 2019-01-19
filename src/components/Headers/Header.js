import React from 'react';
import Logo from '../Logo';
import HeaderTop  from './HeaderTop';

const header = (props) =>(
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
                  <a className="navbar-brand" href="index.html"><Logo cssClass='main-logo'/></a>
              </div>
          </div>

          <div className="col-md-10 p0">
              <div className="collapse navbar-collapse" id="min_navbar">
                  <ul className="nav navbar-nav navbar-right">
                      <li><a href="/home" className="dropdown-toggle" data-toggle="dropdown">Home</a></li>
                      <li><a href="#AboutUs" id="AboutUs" className="dropdown-toggle" data-toggle="dropdown" onClick={props.onClickScroll}>About Us</a></li>
                      <li><a href="#OurServices" id="OurServices" className="dropdown-toggle" data-toggle="dropdown" onClick={props.onClickScroll}>Services</a></li>
                      <li><a href="#OurFeatures" id="OurFeatures" className="dropdown-toggle" data-toggle="dropdown" onClick={props.onClickScroll}>Features</a></li>
                      <li><a href="#OurAchievements" id="OurAchievements" className="dropdown-toggle" data-toggle="dropdown" onClick={props.onClickScroll}>Achievements</a></li>
                      <li className="dropdown submenu">
                          <a className="dropdown-toggle" data-toggle="dropdown">Projects</a>
                          <ul className="dropdown-menu">
                              <li><a href="/projects/onGoing">Ongoing</a></li>
                              <li><a href="/projects/completed">Completed</a></li>
                          </ul>
                      </li>
                      <li><a href="/contact">Contact</a></li>
                  </ul>
              </div>
          </div>
      </div>
  </nav>
  </div>
);

export default header;
