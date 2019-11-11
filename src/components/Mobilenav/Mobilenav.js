import React, { Component } from 'react'
import './Mobilenav.scss';
import acorn from '../Header/icon.png';
import {FaAlignRight} from 'react-icons/fa';
import {Link} from 'react-router-dom';


export class Mobilenav extends Component {
state={
    isOpen:false
}
handleToggle = () => {
    this.setState({isOpen:!this.state.isOpen})
}
    render() {
        return (
            <div>
                <div className="mobile-navbar">
                    <div className="nav-center">
                            <Link>
                                    <img src={acorn} alt="Acorn Logo" className="mobile-image"/>
                            </Link>
                        <div
                            // type="button"
                            className="nav-btn"
                            onClick={this.handleToggle}
                        >
                            <FaAlignRight className="nav-icon" />
                        </div>    
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li className="mobNav1">
                            <Link to="/">Home</Link>
                        </li>
                        <li className="mobNav2">
                            <a href="https://www.opentable.com/acorn?avt=eyJ2IjoxLCJtIjowLCJwIjowfQ&corrid=70ef5610-e83f-48c9-9445-913aea7c48b8&p=2&sd=2019-11-10+19%3A00">Reservations</a>
                        </li>
                        <li className="mobNav3">
                            <Link to="/private-dining">Private Dining</Link>
                        </li>
                        <li className="mobNav4">
                            <Link to="/about">About</Link>
                        </li>
                    </ul>  
                </div>
            </div>       
        );
    }
}

export default Mobilenav
