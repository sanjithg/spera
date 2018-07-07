import React from "react";
import Slide from './Slide';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const carousel = (props) => {
  return (
        <section className="">
            <Carousel autoPlay interval={3000} showThumbs={false}
                      showStatus={false} showIndicators={false} infiniteLoop={true}>
              {props.slides.map(slide =>
                <div>
                  <Slide key={slide} slide={slide}/>
                </div>
              )}
            </Carousel>
        </section>
  )
};

export default carousel;
