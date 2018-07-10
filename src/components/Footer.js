import React from 'react';

const footer = () => {
  return (
    <footer className="footer_area">
        <div className="container">
            <div className="footer_row row">
                <div className="col-md-3 col-sm-6 footer_about">
                    <h2>ABOUT OUR COMPANY</h2>
                    <img src={require("../assets/images/spera-logo.png")} alt=""/>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    <ul className="socail_icon">
                        <li><a href="#"><i className="fa fa-facebook" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-twitter" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-google-plus" aria-hidden="true"></i></a></li>
                        <li><a href="#"><i className="fa fa-linkedin" aria-hidden="true"></i></a></li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6 footer_about quick">
                    <h2>Quick links</h2>
                    <ul className="quick_link">
                        <li><a href="#"><i className="fa fa-chevron-right"></i>Building Construction</a></li>
                        <li><a href="#"><i className="fa fa-chevron-right"></i>Home Renovation</a></li>
                        <li><a href="#"><i className="fa fa-chevron-right"></i>Hardwood Flooring</a></li>
                        <li><a href="#"><i className="fa fa-chevron-right"></i>Repairing Of Roof</a></li>
                        <li><a href="#"><i className="fa fa-chevron-right"></i>Commercial Construction</a></li>
                        <li><a href="#"><i className="fa fa-chevron-right"></i>Concrete Transport</a></li>
                    </ul>
                </div>
                <div className="col-md-3 col-sm-6 footer_about">
                    <h2>Twitter Feed</h2>
                    <a href="#" className="twitter">@colorlib: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</a>
                    <a href="#" className="twitter">@colorlib: Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat.</a>
                </div>
                <div className="col-md-3 col-sm-6 footer_about">
                    <h2>CONTACT US</h2>
                    <address>
                        <p>Have questions, comments or just want to say hello:</p>
                        <ul className="my_address">
                            <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i>info@thethemspro.com</a></li>
                            <li><a href="#"><i className="fa fa-phone" aria-hidden="true"></i>+880 123 456 789</a></li>
                            <li><a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i><span>Sector # 10, Road # 05, Plot # 31, Uttara, Dhaka 1230 </span></a></li>
                        </ul>
                    </address>
                </div>
            </div>
        </div>
        <div className="copyright_area">
            Copyright 2018 All rights reserved. Designed by <a href="https://colorlib.com">Colorlib.</a>
        </div>
    </footer>
  )
}

export default footer;
