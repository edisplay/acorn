import React, { Component } from 'react'
import './_header.scss';
import './_mobile.scss';
import './_mobilestyle.scss';
import Icon from './icon.png';
import Mobileicon from './acorn.jpg'
import { Link } from 'react-router-dom';

export class Header extends Component {
    render() {
        return (
            <div className="header">

            <div className="mobileContainer">
                <div class="mobileMenuWrap">
                        <input type="checkbox" className="toggler" />
                        <div className="hamburger"><div><div></div></div></div>
                        <div className="mobileMenu">
                        <div>
                            <div>
                                <ul>
                                    <li><a className="btn" href="/">Home</a></li>
                                    <li><a className="btn" href="#reservationsAnchor">Reservations</a></li>
                                    <li><Link to="/private-dining" className="btn">Private Dining</Link></li>
                                    <li><Link to="/about" className="btn" href="/">About</Link></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                </div>    


               <div className="desktopNav">
                    <ul >
                        <li><a className="btn" href="#menuAnchor">Menu</a></li>
                        <li><a className="btn" href="#reservationsAnchor">Reservations</a></li>
                        <img className="acorn" src={Icon}/>
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