import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
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
            <Aux>
              <Banner links={this.getLinkObject()}/>
              <Map />
              <ContactInfo />
            </Aux>
    );
  }
}

export default Contact;
