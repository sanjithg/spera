import React from 'react';

const slide = (props) => {
  return (
    <div data-thumb={props.slider} data-src={props.slider}>
        <div className="camera_caption">
           <div className="container">
                <h5 className=" wow fadeInUp animated">
                  <span className="highlightText">WELCOME TO SPERA CONSULTANTS</span>
                </h5>
                <h3 className=" wow fadeInUp animated" data-wow-delay="0.5s">
                  <span className="highlightTextGray">design and engineering consultancies</span>
                </h3>
                <p className=" wow fadeInUp animated" data-wow-delay="0.8s">
                  <span className="highlightTextGray">We build long-term trusted relationships with the consultancies, concessionaires and local government bodies to create safe and economical designs</span>
                </p>
                <a className=" wow fadeInUp animated" data-wow-delay="1s" href="#AboutUs">Read More</a>
           </div>
        </div>
    </div>
  )
}

export default slide;
