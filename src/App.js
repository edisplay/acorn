import React from 'react';
import './App.css';
import './sass/_base.scss';
import Header from './components/Header/Header';
import Process from './components/Process/Process';
import Gsaphero from './components/Gsaphero/Gsaphero';
// import Reservations from './components/Reservations/Reservations';
// import Menu from './components/Menu/Menu';
// import Seasonal from './components/Seasonal/Seasonal'; // Test on S3 for mobile WITH Wordpress deploy!...
// import Polygon from './components/Polygon/Polygon';
// import Gallery from './components/Gallery/Gallery';
// import Hours from './components/Hours/Hours';
// import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="container">
      <Header className= "header"/>
      <Process className= "process"/>
      <Gsaphero className="gsaphero"/>
      {/* <Reservations className="reservations"/>
      <Menu className="menu"/>
      <Seasonal className="seasonal"/>
      <Polygon />
      <Gallery className="gallery"/>
      <Hours className="hours"/>
      <Footer className="footer"/> */}
    </div>
  );
}

export default App;
