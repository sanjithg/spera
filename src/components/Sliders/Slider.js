import React from 'react';

const slider = (props) => (
  <div data-thumb={props.slider} data-src={props.slider}>
      <div className="camera_caption">
         <div className="container">
              <h5 className=" wow fadeInUp animated">Welcome to our</h5>
              <h3 className=" wow fadeInUp animated" data-wow-delay="0.5s">CLEAN, MODERN, MULTIPURPOSE THEME</h3>
              <p className=" wow fadeInUp animated" data-wow-delay="0.8s">
                Our team of professionals will help you turn your dream home or flat into a reality fast. The Love Boat promises something for everyone. Now the world dont move to the beat of just one
              </p>
              <a className=" wow fadeInUp animated" data-wow-delay="2s">Read More</a>
         </div>
      </div>
  </div>
)

export default slider;
