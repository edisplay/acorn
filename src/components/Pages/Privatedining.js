import React, { Component } from 'react';
import './_privatedining.scss';
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitterSquare } from 'react-icons/fa';

export class Privatedining extends Component {
    render() {

        return (
            <div className="privateDining">

                <div className="mobileContainer">
                    <div class="mobileMenuWrap">
                            <input type="checkbox" className="toggler" />
                            <div className="hamburger"><div><div></div></div></div>
                            <div className="mobileMenu">
                            <div>
                                <div>
                                    <ul>
                                        <li><a className="btn" href="/">Home</a></li>
                                        <li><a className="btn" href="#reservationsAnchor">Reservations</a></li>
                                        <li><Link to="/private-dining" className="btn">Private Dining</Link></li>
                                        <li><Link to="/about" className="btn" href="/">About</Link></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div> 
                {/* <div id="privDinButton"><Link to="/">Return Home</Link></div> */}
                <h1 className="privDinHeading">Thank you for considering us for your private dining needs!</h1>
                <h4 className="privDinContent">We welcome your celebrations, events, and business gatherings.
                    We offer our private dining loft, “the Bird’s Nest”,
                    with seating for up to 36 guests - or exclusive use of the restaurant
                    for up to 100 guests.

                    acorn is proud to offer
                    Chef Ian Palazzola’s
                    seasonally inspired, family-style menu,
                    along with beverage guy
                    Bryan Dayton’s creative cocktails and
                    nationally recognized cocktail program!</h4>
                    <div id="privDinButton"><a href="https://partners.gatherhere.com/lead-form/zg4356pw">Inquiries</a></div>
                    <div className="socialFooterPriv">
                    <p className="footerMessagePriv">Denver Acorn 2019 - Brought to you by <a href="http://lusciden.com
                ">Lusciden</a></p>
                        <a href="https://www.facebook.com/denveracorn/?ref=br_rs"><FaFacebookF className="social" /></a><a href="https://twitter.com/acorn_Denver?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><FaTwitterSquare className="social2" /></a>
                    </div>
            </div>
        )
    }
}

export default Privatedining
