import React from 'react';

const contactInfo = () => (
  <section className="all_contact_info">
      <div className="container">
          <div className="row contact_row">
              <div className="col-sm-6 contact_info">
                  <h2>Contact Info</h2>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                  <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                  <div className="location">
                      <div className="location_laft">
                          <a className="f_location" href="#">location</a>
                          <a href="#">phone</a>
                          <a href="#">fax</a>
                          <a href="#">email</a>
                      </div>
                      <div className="address">
                          <a href="#">Sector # 10, Road # 05, Plot # 31, Uttara, <br/> Dhaka 1230 </a>
                          <a href="#">+880 123 456 789</a>
                          <a href="#">(626) 935-3026</a>
                          <a href="#">spera@gmail.com</a>
                      </div>
                  </div>
              </div>
              <div className="col-sm-6 contact_info send_message">
                  <h2>Send Us a Message</h2>
                  <form className="form-inline contact_box">
                      <input type="text" className="form-control input_box" placeholder="First Name *"/>
                      <input type="text" className="form-control input_box" placeholder="Last Name *"/>
                      <input type="text" className="form-control input_box" placeholder="Your Email *"/>
                      <input type="text" className="form-control input_box" placeholder="Subject"/>
                      <input type="text" className="form-control input_box" placeholder="Your Website"/>
                      <textarea className="form-control input_box" placeholder="Message"></textarea>
                      <button type="submit" className="btn btn-default">Send Message</button>
                  </form>
              </div>
          </div>
      </div>
  </section>
);

export default contactInfo;
