import React from 'react';
import 'react-animated-slider/build/horizontal.css';
import Slider from 'react-animated-slider';
import Slide from './Slide';


const sliders = (props) => {
  const slides = props.sliders.map(slider =>
    <Slide key={slider} slider={slider}/>
  );

  return (
        <section className="slider_area row m0">
            <div className="slider_inner">
              {slides}
              <Slider autoplay="1000">
                {props.sliders.map(path =>
                  <div>
                    <img src={require("../../" + path)} />
                  </div>
                )}
              </Slider>
            </div>
        </section>
  )
};

export default sliders;
