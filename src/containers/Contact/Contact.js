import React, { Component } from 'react';
import Aux from '../../hoc/Aux';
import Banner from '../../components/Contact/Banner';
import Map from '../../components/Contact/Map';
import ContactInfo from '../../components/Contact/ContactInfo';

class Contact extends Component {
  state = {

  };

  render() {
    return (
            <Aux>
              <Banner />
              <Map />
              <ContactInfo />
            </Aux>
    );
  }
}

export default Contact;
