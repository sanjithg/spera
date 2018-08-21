import React, { Component } from 'react';
// import Aux from './hoc/Aux';
import Layout from './containers/Layout';
import Contact from './containers/Contact/Contact';
import Services from './containers/Services/Services';
import { BrowserRouter, Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import Header from './components/Headers/Header';
import Footer from './components/Footer';
import scrollToComponent from 'react-scroll-to-component';


class App extends Component {
  state = {

  };

  scrollTo(event) {
    this.layout.scrollTo(event);
  };


  render() {
    return (
            <BrowserRouter>
              <div className='Container'>
                <Header onClickScroll={this.scrollTo.bind(this)}/>
                <Switch>
                  <Route path="/aboutUs" exact render={() => <h1>Not found</h1>} />
                  <Route path="#" onClick={() => scrollToComponent(this.Services)} />
                  <Route path="/gallery" exact render={() => <h1>Not found</h1>} />
                  <Route path="/blog" exact render={() => <h1>Not found</h1>} />
                  <Route path="/contact" exact component={Contact} />
                  <Route path="/home" exact render={() => <Layout ref={layout => this.layout = layout}/>} />
                  <Redirect from="/" to="/home" />
                </Switch>
                <Footer />
              </div>
            </BrowserRouter>
    );
  }
}

export default App;
