import React, {Component} from 'react';
import Header from '../components/Headers/Header';
import Sliders from '../components/Sliders/Sliders';
import Spinner from '../components/Spinner';
import Features from '../components/Features/Features';
import AboutUs from '../components/AboutUs';
import { Button } from 'react-bootstrap';


class Layout extends Component {
  state = {
    sliderImages: ["../../assets/images/sliderImages/slider-1.jpg", "../../assets/images/sliderImages/slider-2.jpg"],
    loading: false
  };

  render(){
    const features = [{
      key: 1,
      icon: "fa fa-home",
      heading: "Professional Build",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
    }, {
      key: 2,
      icon: "fa fa-building",
      heading: "We Deliver Quality",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
    },  {
      key: 3,
      icon: "fa fa-clock-o",
      heading: "Always On Time",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
    }, {
      key: 4,
      icon: "fa fa-thumbs-up",
      heading: "We Are Passionate",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
    }];
    const spinner =  this.state.loading? <Spinner /> : null

    return(
      <div >
        {spinner}
        <Header />
        <Sliders sliders={this.state.sliderImages}/>
        <Features features = {features}/>
        <AboutUs />
      </div>
    )
  }
}

export default Layout;
