import React, { Component } from 'react'
import './_gsaphero.scss';
// import AOS from 'aos';
import 'aos/dist/aos.css';

export class Gsaphero extends Component {
    render() {
        return (
            <div className="gsaphero">
                <h1 className="gsapHeading" data-aos="fade-down" >A feast for your eyes as much as your palate.</h1>
            </div>
        )
    }
}

export default Gsaphero
