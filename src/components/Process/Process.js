import React, { Component } from 'react'
import '../../sass/_process.scss';
import Dish from './dish.jpg';
import Chef from './chef.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Bowl from './dish.jpg';
import Chef2 from './chef.png';
import { Link } from 'react-router-dom';

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
                <div className="column" id="processCard">
                    <div className="card">
                    <h1 className="processHeading">Our Process</h1>
                    <p className="summary">Locally-sourced, fresh ingredients come together under the thoughtful, creative care of our chefs. Gifts of nature prepared and arranged so as to emphasize their flavors in a way that creates novel experiences for the palate.</p>
                    <div className="button"><Link to="/about">Learn More</Link></div>
                    </div>
                </div> 
                    <img className="dish" data-aos="fade-up" src={Bowl}/>
                    <img className="chef" data-aos="fade-down" src={Chef2}/>                    
            </div>
        )
    }
}

export default Process
