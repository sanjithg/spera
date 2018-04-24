import React from 'react';

const toolBar = (props) => (
                <div className="collapse navbar-collapse" id="min_navbar">
                    <ul className="nav navbar-nav navbar-right">
                        <li className="dropdown submenu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Home</a>
                            <ul className="dropdown-menu">
                                <li><a href="index.html">Home</a></li>
                                <li><a href="index-2.html">Home 2</a></li>
                            </ul>
                        </li>
                        <li className="dropdown submenu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">About Us</a>
                            <ul className="dropdown-menu other_dropdwn">
                                <li><a href="about.html">About Us</a></li>
                                <li><a href="about-2.html">About Us-2</a></li>
                            </ul>
                        </li>
                        <li className="dropdown submenu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Services</a>
                            <ul className="dropdown-menu other_dropdwn">
                                <li><a href="services.html">Services</a></li>
                                <li><a href="services-2.html">Services-2</a></li>
                            </ul>
                        </li>
                        <li><a href="#">Gallery</a></li>
                        <li className="dropdown submenu">
                            <a href="#" className="dropdown-toggle" data-toggle="dropdown">Blog</a>
                            <ul className="dropdown-menu">
                                <li><a href="blog.html">Blog</a></li>
                                <li><a href="blog-2.html">Blog-2</a></li>
                            </ul>
                        </li>
                        <li><a href="contact.html">Contact</a></li>
                        <li><a href="#" className="nav_searchFrom"><i className="fa fa-search"></i></a></li>
                    </ul>
                </div>
);

export default toolBar;
