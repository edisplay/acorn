import React, { Component } from 'react';
import Chefian from './chefIan.png';
import Bryan from './bryan.png';
import { FaFacebookF, FaTwitterSquare } from 'react-icons/fa';
import './about.scss'
import './_mobilestyleabt.scss';
import { Link } from 'react-router-dom';

export class About extends Component {
    render() {
        return (
        <div className="aboutContainer">
                <div className="desktopNavAbt">
                    <ul >
                        <li><a className="btn" href="/">Home</a></li>
                        <li><a className="btn" href="#reservationsAnchor">Reservations</a></li>
                        <li><Link to="/private-dining" className="btn">Private Dining</Link></li>
                        <li><Link to="/about" className="btn" href="/">About</Link></li>
                    </ul>
                </div> 

            <div className="contBorder">
                </div>
                    <img className="aboutImage1" src={Bryan}/>
                    <img className="aboutImage2" src={Chefian}/>
                    <div className="aboutBryan">
                        <p>The owner of Acorn and the Half Eaten Cookie restaurant group, Bryan Dayton is a restauranteur who takes pride in well-sourced, excellently-prepared foods. He shares his passion for the hospitality industry with employees and patrons alike. This dedication to the craft shines through in both the food and cocktail menu.</p>
                    </div>
                    <div className="aboutChefIan">
                        <p>Preparing incredible food since age 14, Chef Ian Palazzola now brings his sense of artistry into the kitchen here at Denver Acorn. His extreme dedication to creating signature dishes does not take the fun out of food however, and there is a genuine sense of playfulness found in many dishes. Foods where one's flavor palate and color palate intermingle.</p>
                    </div>
                    <div className="footerAbt">
                <p className="footerMessage">Denver Acorn 2019 - Brought to you by <a href="http://lusciden.com">Lusciden</a></p>
                <div className="socialFooterAbt">
                    <a href="https://www.facebook.com/denveracorn/?ref=br_rs"><FaFacebookF className="socialAbt" /></a><a href="https://twitter.com/acorn_Denver?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><FaTwitterSquare className="socialAbt2" /></a>
                </div>
            </div>
            </div>
        )
    }
}

export default About
