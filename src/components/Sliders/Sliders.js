import React from 'react';
import Slider from './Slider';

const sliders = (props) => {
  const slides = props.sliders.map(slider =>
    <Slider key={slider} slider = {slider}/>
  );

  return (
        <section className="slider_area row m0">
            <div className="slider_inner">
              {slides}
            </div>
        </section>
  )
};

export default sliders;
