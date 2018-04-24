import React from 'react';
import clientImage from '../assets/images/aboutUs/about_client.jpg';

const aboutUs = () => (
  <section className="about_us_area row">
        <div className="container">
            <div className="tittle wow fadeInUp">
                <h2>ABOUT US</h2>
                <h4>Lorem Ipsum is simply dummy text of the printing and typesetting industry</h4>
            </div>
            <div className="row about_row">
                <div className="who_we_area col-md-7 col-sm-6">
                    <div className="subtittle">
                        <h2>WHO WE ARE</h2>
                    </div>
                    <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text.</p>
                    <a href="#" className="button_all">Contact Now</a>
                </div>
                <div className="col-md-5 col-sm-6 about_client">
                    <img src={clientImage} alt="Client-image"/>
                </div>
            </div>
        </div>
    </section>
)

export default aboutUs;
