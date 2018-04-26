import React, {Component} from 'react';
import Header from '../components/Headers/Header';
import Sliders from '../components/Sliders/Sliders';
import Spinner from '../components/Spinner';
import Features from '../components/Features/Features';
import AboutUs from '../components/AboutUs';
import WhatWeOffer from '../components/WhatWeOffer/WhatWeOffer';
import OurFeatures from '../components/OurFeatures/OurFeatures';
import OurServices from '../components/OurServices/OurServices';
import OurAchievements from '../components/OurAchievements/OurAchievements';
import { Button } from 'react-bootstrap';


class Layout extends Component {
  state = {
    sliderImages: ["../../assets/images/sliderImages/slider-1.jpg", "../../assets/images/sliderImages/slider-2.jpg"],
    ourServices: [{
      image: 1,
      heading: 'CONSTRUCTION',
      type: ['ALL', 'PAINTING', 'PHOTOGRAPHY', 'ADVERTISING'],
      show: true
    }, {
      image: 2,
      heading: 'CONSTRUCTION',
      type: ['ALL', 'WEBDESIGN'],
      show: true
    }, {
      image: 3,
      heading: 'CONSTRUCTION',
      type: ['ALL', 'PAINTING', 'PHOTOGRAPHY', 'BRANDING'],
      show: true
    }, {
      image: 4,
      heading: 'CONSTRUCTION',
      type: ['ALL', 'ADVERTISING'],
      show: true
    }, {
      image: 5,
      heading: 'CONSTRUCTION',
      type: ['ALL', 'PAINTING', 'BRANDING', 'ADVERTISING'],
      show: true
    }],
    activeService: 'ALL',
    loading: false
  };

  getFeatures() {
    return ([{
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
    }])
  };

  getOffers() {
    return ([{
      image: 1,
      icon: "fa fa-home",
      heading: "BUILDING CONSTRUCTION",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
    }, {
      image: 2,
      icon: "fa fa-keyboard-o",
      heading: "PROJECT PLANNING",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
    },  {
      image: 3,
      icon: "fa fa-gavel",
      heading: "HOUSE RENOVATION",
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod"
    }])
  };

  getOurFeatures() {
    return ([{
      key: 1,
      icon: "fa fa-wrench",
      heading: "30+ YEARS OF EXPERIENCE",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting indus-try. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    }, {
      key: 2,
      icon: "fa fa-rocket",
      heading: "QUALIFIED EXPERTS",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting indus-try. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    },  {
      key: 3,
      icon: "fa fa-users",
      heading: "Best Customer Services",
      description: "Lorem Ipsum is simply dummy text of the printing and typesetting indus-try. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s"
    }])
  };

  getOurAchievements() {
    return ([{
      key: 1,
      icon: "fa fa-connectdevelop",
      heading: "PROJECTS COMPLETED",
      counter: 800
    }, {
      key: 2,
      icon: "fa fa-home",
      heading: "HOUSE RENOVATIONS",
      counter: 230
    }, {
      key: 3,
      icon: "fa fa-child",
      heading: "WORKERS EMPLOYED",
      counter: 1390
    }
    , {
      key: 4,
      icon: "fa fa-trophy",
      heading: "AWARDS WON",
      counter: 125
    }])
  };

  updateServicesHandler = (type) => {
    let ourServices = [...this.state.ourServices];

    ourServices.map((service, index) => {
      if (service.type.indexOf(type) == -1) {
        ourServices[index].show = false
      } else {
        ourServices[index].show = true
      }
    });

    this.setState({ourServices:ourServices, activeService: type});
  };

  getServiceHeadings() {
    return (['ALL', 'ARCHITECTURE', 'BUILDINGS', 'CONSTRUCTION', 'DESIGN', 'PAINTING']);
  };

  render(){
    const spinner =  this.state.loading? <Spinner /> : null;
    return(
      <div >
        {spinner}
        <Header />
        <Sliders sliders={this.state.sliderImages}/>
        <Features features = {this.getFeatures()}/>
        <AboutUs />
        <WhatWeOffer offers = {this.getOffers()}/>
        <OurFeatures features = {this.getOurFeatures()}/>
        <OurAchievements achievements= {this.getOurAchievements()}/>
        <OurServices services= {this.state.ourServices}
                     headings = {this.getServiceHeadings()}
                     active = {this.state.activeService}
                     clicked={this.updateServicesHandler}/>
      </div>
    )
  }
}

export default Layout;
