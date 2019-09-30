import React from 'react';
import './App.css';
import './sass/_base.scss';
import { render } from 'react-dom';
import About from './components/Pages/About';
import Privatedining from './components/Pages/Privatedining';
import Header from './components/Header/Header';
import Process from './components/Process/Process';
import Gsaphero from './components/Gsaphero/Gsaphero';
import Reservations from './components/Reservations/Reservations';
import Menu from './components/Menu/Menu';
import Seasonal from './components/Seasonal/Seasonal'; // Test on S3 for mobile WITH Wordpress deploy!...
import Gallery from './components/Gallery/Gallery';
import Hours from './components/Hours/Hours';
import Employment from './components/Employment/Employment';
import Footer from './components/Footer/Footer';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';

function App() {
  return (
    <Router>
        <Switch>
        <Route path="/join-our-team" component={Employment}/>  
        <Route path="/about" component={About}/>
        <Route path="/private-dining" component={Privatedining}/>
        <div className="container">
            <Route path="/" component={Header}/>
            <Route path="/" component={Process}/>
            <Route path="/" component={Gsaphero}/>
            <Route path="/" component={Reservations}/>
            <Route path="/" component={Menu}/>
            <Route path="/" component={Seasonal}/>
            <Route path="/" component={Gallery}/>
            <Route path="/" component={Hours}/>
            <Route path="/" component={Footer}/>
        </div>
        </Switch>  
    </Router>         
  );
}

export default App;
