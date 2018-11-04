import React from 'react';

const footer = () => {
  return (
    <footer className="footer_area">
        <div className="container">
            <div className="footer_row row">
                <div className="col-md-3 col-sm-6 footer_about">
                    <h2>ABOUT OUR COMPANY</h2>
                    <img src={require("../assets/images/spera-logo.png")} alt=""/>
                    <p>We build long-term trusted relationships with the consultancies, concessionaires and local government bodies to create safe and economical designs</p>
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
                    <h2>CONTACT US</h2>
                    <address>
                        <p>Have questions, comments or just want to say hello:</p>
                        <ul className="my_address">
                            <li><a href="#"><i className="fa fa-envelope" aria-hidden="true"></i>info@sperainfra.in</a></li>
                            <li><a href="#"><i className="fa fa-phone" aria-hidden="true"></i>+91 9494413431</a></li>
                            <li><a href="#"><i className="fa fa-map-marker" aria-hidden="true"></i><span>6-2-913/914, 1st Floor, Progressive Towers, Khairatabad, Hyderabad – 500 004 </span></a></li>
                        </ul>
                    </address>
                </div>
            </div>
        </div>
        <div className="copyright_area">
            Copyright 2018 All rights reserved. By <a href="https://spera.com">Spera</a>
        </div>
    </footer>
  )
}

export default footer;
