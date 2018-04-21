import React, {Component} from 'react';
import Header from '../components/Header';
import Spinner from '../components/Spinner'
import { Navbar, Jumbotron, Button } from 'react-bootstrap';


class Layout extends Component {
  state = {
    loading: false
  };

  render(){
    const spinner =  this.state.loading? <Spinner /> : null

    return(
      <div >
        {spinner}
        <Header />
        <Button bsStyle="primary">Button</Button>

      </div>
    )
  }
}

export default Layout;
