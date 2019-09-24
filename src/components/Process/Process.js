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

            </div>
        )
    }
}

export default Process
