import React, { Component } from 'react'
import '../../sass/_process.scss';
import Dish from './dish.jpg';
import Chef from './chef.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Bowl from './dish.jpg';
import Chef2 from './chef.png';

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
                    <h1 className="processHeading">Our Process</h1>
                    <p className="summary">Locally-sourced, fresh ingredients come together under the thoughtful, creative care of our chefs. Gifts of nature prepared and arranged so as to emphasize their natural flavors in a way that creates novel experiences for the palate.</p>
                    <div className="button">Learn More</div>
                </div>
                    <div className="greyBox"></div>
                    <img className="dish" data-aos="fade-up" src={Bowl}/>
                    <img className="chef" data-aos="fade-down" src={Chef2}/>
            </div>
        )
    }
}

export default Process
