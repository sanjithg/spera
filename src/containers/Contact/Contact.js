import React, { Component } from 'react';
// import Auxx from '../../hoc/Auxx';
import Banner from '../../components/Banner';
import Map from '../../components/Contact/Map';
import ContactInfo from '../../components/Contact/ContactInfo';

class Contact extends Component {
  state = {

  };

  getLinkObject() {
    return([
      {
        link: "/home",
        text: "Home",
        active: ""
      },
      {
        link: "/contact",
        text: "Contact Us",
        active: "active"
      }
    ])
  };

  render() {
    return (
            <div>
              <Banner links={this.getLinkObject()}/>
              <Map />
              <ContactInfo />
            </div>
    );
  }
}

export default Contact;
