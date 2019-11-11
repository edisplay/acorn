import React, { Component } from 'react'
import './_header.scss';
import './_mobile.scss';
import Icon from './icon.png';
import Mobileicon from './acorn.jpg'
import { Link } from 'react-router-dom';
import Mobilenav from '../Mobilenav/Mobilenav';

export class Header extends Component {
    render() {
        return (
            <div className="header">
                <Mobilenav />
               <div className="desktopNav">
                    <ul >
                        <li><a className="btn" href="/">Home</a></li>
                        <li><a className="btn" href="https://www.opentable.com/acorn?avt=eyJ2IjoxLCJtIjowLCJwIjowfQ&corrid=70ef5610-e83f-48c9-9445-913aea7c48b8&p=2&sd=2019-11-10+19%3A00">Reservations</a></li>
                        <li><Link to="/private-dining" className="btn">Private Dining</Link></li>
                        <li><Link to="/about" className="btn" href="/">About</Link></li>
                    </ul>
                </div> 
                <h1 className="heroHeading">It's time for a new experience.</h1>
                <h2 className="heading5280">"On the plate, (Chef Ian) Palazzola synthesizes his Virginia roots and time spent in kitchens from Atlanta to Aspen to the Bay Area..."</h2>
                <p className="quote5280">-5280 Magazine 2019-</p>
                <h2 className="headingYelp">"4.5 Stars on Yelp"</h2>
                <p className="quoteYelp">-1012 Reviews and Counting-</p>
                <img className="acornHeading" src={Icon}/>
            </div>
        )
    }
}
export default Header