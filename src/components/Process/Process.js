import React, { Component } from 'react'
import '../../sass/_process.scss';
import Dish from './dish.jpg';
import Chef from './chef.png';
import AOS from 'aos';
import 'aos/dist/aos.css';

export class Process extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        AOS.init({
            duration : 2000
        })
    }
    render() {
        return (
            <div className="process">
                <div className="processDiv">
                </div>
                <h1 className="processHeading" data-aos='fade-down'>Our Process</h1>
                <div className="processDivider" data-aos='fade-down'></div>
                <p className="processSummary" data-aos='fade-down'>Locally-sourced, fresh ingredients come together under the thoughtful, creative care of our chefs. Gifts of nature prepared and arranged so as to emphasize their natural flavors in a way that creates novel experiences for the palate.</p>
                <div className="processButton" data-aos='fade-down'></div>
                <div className="greyBox"></div>
                <img className="dish" data-aos="fade-up-right" src={Dish}/>
                <img className="chef" data-aos="fade-up-left" src={Chef}/>
                <div className="button">Learn More</div>
            </div>
        )
    }
}

export default Process
