import React from 'react';
import clientImage from '../assets/images/aboutUs/about_client.jpg';

const aboutUs = () => (
  <section className="about_us_area row">
        <div className="container">
            <div className="tittle wow fadeInUp">
                <h2>ABOUT US</h2>
                <h4>SPERA INFRA CONSULATANTS PVT LTD HAS started with a vision of progressive development</h4>
            </div>
            <div className="row about_row">
                <div className="who_we_area col-md-7 col-sm-6">
                    <div className="subtittle">
                        <h2>WHO WE ARE</h2>
                    </div>
                    <p>SPERA Consultants established as the Partnership firm in the year 2014 and converted as Pvt. Ltd in the year 2017 and is one of the design and engineering consultancies. We build long-term trusted relationships with the consultancies, concessionaires and local government bodies to create safe and economical designs which are enriched through the implementation of our ideas.</p>
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
