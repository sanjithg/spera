import React, { Component } from 'react';
// import Auxx from './hoc/Auxx';
import Layout from './containers/Layout';
import Contact from './containers/Contact/Contact';
import Projects from './containers/Projects/Projects';
import { BrowserRouter, Route, Switch, Redirect, HashRouter } from 'react-router-dom';
import Header from './components/Headers/Header';
import Footer from './components/Footer';
import scrollToComponent from 'react-scroll-to-component';


class App extends Component {
  state = {

  };

  scrollTo(event) {
    if(this.layout != undefined) {
      this.layout.scrollTo(event);
    } else {
      window.location.href = '/';      
    }
  };


  render() {
    return (
            <BrowserRouter>
              <div className='Container'>
                <Header onClickScroll={this.scrollTo.bind(this)}/>
                <Switch>
                  <Route path="/aboutUs" exact render={() => <h1>Under Construction!!</h1>} />
                  <Route path="/gallery" exact render={() => <h1>Under Construction!!</h1>} />
                  <Route path="/projects" exact component={Projects} />
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
