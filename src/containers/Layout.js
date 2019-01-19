import React, {Component} from 'react';
import Sliders from '../components/Sliders/Sliders';
import Spinner from '../components/Spinner';
import Features from '../components/Features/Features';
import AboutUs from '../components/AboutUs';
import WhatWeOffer from '../components/WhatWeOffer/WhatWeOffer';
import OurFeatures from '../components/OurFeatures/OurFeatures';
import OurServices from '../components/OurServices/OurServices';
import OurTeam from '../components/OurTeam/OurTeam';
import OurAchievements from '../components/OurAchievements/OurAchievements';
import scrollToComponent from 'react-scroll-to-component';

class Layout extends Component {
  state = {
    sliderImages: [
      "assets/images/sliderImages/slider-1.jpg",
      "assets/images/sliderImages/slider-2.jpg",
      "assets/images/sliderImages/slider-3.jpg",
      "assets/images/sliderImages/slider-4.jpg",
      "assets/images/sliderImages/slider-5.jpg",
      "assets/images/sliderImages/slider-6.jpg",
      "assets/images/sliderImages/slider-7.jpg",
      "assets/images/sliderImages/slider-8.jpg",
      "assets/images/sliderImages/slider-9.jpg",
      "assets/images/sliderImages/slider-10.jpg",
      "assets/images/sliderImages/slider-11.jpg",
      "assets/images/sliderImages/slider-12.jpg",
      "assets/images/sliderImages/slider-13.jpg",
      "assets/images/sliderImages/slider-14.jpg",
      "assets/images/sliderImages/slider-15.jpg",
      "assets/images/sliderImages/slider-16.jpg"
    ],
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
      description: "If you are looking for Building Services in your area, then SPERA consultants Pvt Ltd are here to help!"
    }, {
      key: 2,
      icon: "fa fa-building",
      heading: "We Deliver Quality",
      description: "Quality is conformance to standards, we deliver quality which exceeds our customer's expectations"
    },  {
      key: 3,
      icon: "fa fa-clock-o",
      heading: "Always On Time",
      description: "Maintain a committed focus on timely delivery of every project and have an outstanding track record"
    }, {
      key: 4,
      icon: "fa fa-thumbs-up",
      heading: "We Are Passionate",
      description: "We are passionate! If we're not passionate about our work and how we carry out our role as leaders"
    }])
  };

  getOffers() {
    return ([{
      image: 1,
      icon: "fa fa-home",
      heading: "OUR VISION",
      description: "Passionate about our vision and committed to setting new and higher standards of excellence"
    }, {
      image: 2,
      icon: "fa fa-keyboard-o",
      heading: "MISSION",
      description: "Customer centric, Employees, learning and development, Metrics"
    },  {
      image: 3,
      icon: "fa fa-gavel",
      heading: "Core Values",
      description: "Honesty and Integrity, Commitment, Postive Attitude, Motivated to grow and Learn"
    }])
  };

  getOurFeatures() {
    return ([{
      key: 1,
      icon: "fa fa-wrench",
      heading: "TECHNO",
      description: "SPERA provides Economic Feasibility Studies"
    }, {
      key: 2,
      icon: "fa fa-rocket",
      heading: "PROJECT REPORT",
      description: "SPERA provides Detailed Project Report Studies"
    },  {
      key: 3,
      icon: "fa fa-users",
      heading: "Engineering Services",
      description: "SPERA provides Pre-bid Engineering Services"
    }])
  };

  getTeamMembers() {
    return ([{
          key: 1,
          accoutDetails: "",
          name: "Prashant Joshi",
          designation: "M. Tech in Highway & Traffic Engineering (IIT Kharagpur) and MBA (IIT, Delhi)",
          description: ""
        },
        {
          key: 2,
          accoutDetails: "",
          name: "R J Surya Prakash",
          designation: "M.E in Structural Engineering",
          description: ""
        },
        {
          key: 3,
          accoutDetails: "",
          name: "G Praveen Kumar",
          designation: "M.tech in Structural Engineering",
          description: ""
        }
      ]
    )
  }

  getOurAchievements() {
    return ([{
      key: 1,
      icon: "fa fa-connectdevelop",
      heading: "PROJECTS COMPLETED",
      counter: 10
    }, {
      key: 2,
      icon: "fa fa-home",
      heading: "ON GOING PROJECTS COUNT",
      counter: 7
    }, {
      key: 3,
      icon: "fa fa-child",
      heading: "WORKERS EMPLOYED",
      counter: 10
    }
    , {
      key: 4,
      icon: "fa fa-trophy",
      heading: "AWARDS WON",
      counter: 8
    }])
  };

  updateServicesHandler = (type) => {
    let ourServices = [...this.state.ourServices];

    ourServices.map((service, index) => {
      if (service.type.indexOf(type) === -1) {
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

  scrollTo(event) {
    scrollToComponent(this[event.target.id]);
  }

  render(){
    const spinner =  this.state.loading? <Spinner /> : null;
    return(
      <div >
        {spinner}
        <Sliders sliders={this.state.sliderImages}/>
        <section ref={(section) => { this.Features = section; }}><Features features = {this.getFeatures()}/></section>
        <section ref={(section) => { this.AboutUs = section; }}><AboutUs /></section>
        <section ref={(section) => { this.WhatWeOffer = section; }}><WhatWeOffer offers = {this.getOffers()}/></section>
        <section ref={(section) => { this.OurFeatures = section; }}><OurFeatures features = {this.getOurFeatures()}/></section>
        <section ref={(section) => { this.OurAchievements = section; }}><OurAchievements achievements= {this.getOurAchievements()}/></section>
        <section ref={(section) => { this.OurServices = section; }}><OurServices services= {this.state.ourServices}
                     headings = {this.getServiceHeadings()}
                     active = {this.state.activeService}
                     clicked={this.updateServicesHandler}/></section>
        <section ref={(section) => { this.OurTeam = section; }}><OurTeam team = {this.getTeamMembers()}/></section>
      </div>
    )
  }
}

export default Layout;
