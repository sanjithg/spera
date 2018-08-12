import React from 'react';

const slide = (props) => {
  return (
    <div data-thumb={props.slider} data-src={props.slider}>
        <div className="camera_caption">
           <div className="container">
                <h5 className=" wow fadeInUp animated">WELCOME TO SPERA CONSULTANTS</h5>
                <h3 className=" wow fadeInUp animated" data-wow-delay="0.5s">design and engineering consultancies</h3>
                <p className=" wow fadeInUp animated" data-wow-delay="0.8s">
                  We build long-term trusted relationships with the consultancies, concessionaires and local government bodies to create safe and economical designs
                </p>
                <a className=" wow fadeInUp animated" data-wow-delay="1s" href="#AboutUs">Read More</a>
           </div>
        </div>
    </div>
  )
}

export default slide;
