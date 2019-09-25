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
                    <p className="summary">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsu</p>
                    <div className="button">Learn More</div>
                </div>
                {/* <div className="greyBox">
                    <img className="dish" data-aos="fade-up" src={Bowl}/>
                    <img className="chef" data-aos="fade-down" src={Chef2}/>
                </div> */}
                    
            </div>
        )
    }
}

export default Process
