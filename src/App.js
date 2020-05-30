import React from 'react';
import Header from '../src/components/header/Header';
import Footer from '../src/components/footer/Footer';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import { Helmet } from 'react-helmet';
import Services from './components/services/Services';
import Work from './components/work/Work';
import Contact from './components/contact/Contact';
import Main from './components/main/Main';
import About from './components/about/About';

const TITLE = "Hover Studio"

function App() {
  return (
    <div className="App">
      <Helmet>
        <title>{ TITLE }</title>
      </Helmet>
      <Router>
        <Header />
      <Switch>
          <Route path="/services">
            <Services />
          </Route>
          <Route path="/work">
            <Work />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/">
            <Main />
          </Route>
      </Switch>
      <Footer />
      </Router>
    </div>
         
  );
}

export default App;
