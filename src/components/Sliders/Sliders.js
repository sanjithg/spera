import React from 'react';
import 'react-animated-slider/build/horizontal.css';
import Slider from 'react-animated-slider';
import Slide from './Slide';

const sliders = (props) => {

  const slide = props.sliders.map(slider => {
    return(
      <div key={slider}>
        <div className="transparentLayer">
          <img src={require("../../" +slider)} />
        </div>
        <Slide slider={slider}/>
      </div>
    );
  }
  );

  return (

        <section className="slider_area row m0">
            <div className="slider_inner">
            <Slider autoplay="1000">
              {slide}
            </Slider>
            </div>
        </section>
  )
};

export default sliders;
