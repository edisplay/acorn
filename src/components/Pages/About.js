import React, { Component } from 'react';
import { FaFacebookF, FaTwitterSquare } from 'react-icons/fa';
import './about.scss'
import { Link } from 'react-router-dom';
import Mobilenav from '../Mobilenav/Mobilenav';

export class About extends Component {
    render() {
        return (
        <div className="about-container">
            <div className="desktopNavPriv">
                    <ul>
                        <li><a className="btn" href="/">Home</a></li>
                        <li><a className="btn" href="https://www.opentable.com/acorn?avt=eyJ2IjoxLCJtIjowLCJwIjowfQ&corrid=70ef5610-e83f-48c9-9445-913aea7c48b8&p=2&sd=2019-11-10+19%3A00">Reservations</a></li>
                        <li><Link to="/private-dining" className="btn">Private Dining</Link></li>
                        <li><Link to="/about" className="btn" href="/">About</Link></li>
                    </ul>
            </div> 
            <Mobilenav />
            <div>
                <h1 className="about-heading">About Us</h1>
            </div>
            <div className="about-div">
                <div id="about-content-container">
                        <p>Acorn was born from a dream to bring fresh and unique ingredients together in
                        novel ways. There is an obvious need to indulge in a more artistic approach
                        to cuisine in today's dining atmosphere. Acorn sought to fill that void, gracefully.
                        We do so in the hopes of helping out guests create memories that last a lifetime,
                        even if the taste is fleeting.</p>
                        <br></br>
                        <p>We invite you to sample our ever-evolving, changing menu in the hopes that we can
                        convey culinary ideas that transcend words. There's certainly something to be said
                        for food that brings comfort, but our goal is to transcend comfort and arrive with
                        you at extraordinary.</p>
                        <br></br>
                        <p>Shared experiences are what we do best, and we seek to employ the very cutting-edge
                        of culinary art to capture your imagination. We take great pride in being a part of
                        the memories we help you to make, and are grateful for the opportunity to do so.</p>
                </div>
            </div>
            </div>
        )
    }
}

export default About
