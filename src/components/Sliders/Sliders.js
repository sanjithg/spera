import React from 'react';
import 'react-animated-slider/build/horizontal.css';
import Slider from 'react-animated-slider';
import Slide from './Slide';

const sliders = (props) => {

  const ss = props.sliders.map(slider => {
    return(<div key={slider}>
      <img src={require("../../" +slider)} alt='slide.jpg'/>
      <Slide slider={slider}/>
    </div>);
  }
  );

  return (
    <section className="slider_area row m0">
      <div className="slider_inner">
        <Slider autoplay="1000">{ss}</Slider>
      </div>
    </section>
  )
};

export default sliders;
