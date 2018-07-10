import React, { Component } from 'react';
// import Aux from './hoc/Aux';
import Layout from './containers/Layout';
import Contact from './containers/Contact/Contact';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import Header from './components/Headers/Header';
import Footer from './components/Footer';

class App extends Component {
  state = {

  };

  render() {
    return (
            <BrowserRouter>
              <div className='Container'>
                <Header />
                <Switch>
                  <Route path="/gallery" exact render={() => <h1>Not found</h1>} />
                  <Route path="/contact" exact component={Contact} />
                  <Route path="/home" exact component={Layout} />
                  <Redirect from="/" to="/home" />
                </Switch>
                <Footer />
              </div>
            </BrowserRouter>
    );
  }
}

export default App;
