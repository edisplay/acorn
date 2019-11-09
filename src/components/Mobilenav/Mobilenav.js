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
                        <button
                            type="button"
                            className="nav-btn"
                            onClick={this.handleToggle}
                        >
                            <FaAlignRight className="nav-icon" />
                        </button>    
                    </div>
                    <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/">Reservations</Link>
                        </li>
                        <li>
                            <Link to="/private-dining">Private Dining</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                    </ul>  
                </div>
            </div>       
        );
    }
}

export default Mobilenav
