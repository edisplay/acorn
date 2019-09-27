import React, { Component } from 'react';
import Footer from '../Footer/Footer';
import Chefian from './chefIan.png';
import Bryan from './bryan.png';
import './about.scss'
import { Link } from 'react-router-dom';

export class About extends Component {
    render() {
        return (
        <div className="aboutContainer">
            <div class="button" id="aboutButton"><Link to="/">Return Home</Link></div>
            <div className="contBorder">
                </div>
                    <img className="aboutImage1" src={Bryan}/>
                    <img className="aboutImage2" src={Chefian}/>
                    <div className="aboutBryan">
                        <p>The owner of Acorn and the Half Eaten Cookie restaurant group, Bryan Dayton is a restauranteur who takes pride in well-sourced, excellently-prepared foods.</p>
                    </div>
                    <div className="aboutChefIan">
                        <p>Preparing incredible food since age 14, Chef Ian Palazzola now brings his sense of artistry into the kitchen here at Denver Acorn. </p>
                    </div>
                    <Footer className="Footer" />
            </div>
        )
    }
}

export default About
