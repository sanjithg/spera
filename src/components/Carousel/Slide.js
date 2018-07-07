import React from 'react';

const slide = (props) => {
  return (
    <div data-thumb={props.slide} data-src={props.slide}>
        <img src={require("../../" + props.slide)} />
        <div className="camera_caption">
           <div className="container">
                <h5 className=" wow fadeInUp animated">Welcome to our</h5>
                <h3 className=" wow fadeInUp animated" data-wow-delay="0.5s">CLEAN, MODERN, MULTIPURPOSE THEME</h3>
                <p className=" wow fadeInUp animated" data-wow-delay="0.8s">
                  Our team of professionals will help you turn your dream home or flat into a reality fast. The Love Boat promises something for everyone. Now the world dont move to the beat of just one
                </p>
                <a className=" wow fadeInUp animated" data-wow-delay="1s" href="#">Read More</a>
           </div>
        </div>
    </div>
  )
}

export default slide;
