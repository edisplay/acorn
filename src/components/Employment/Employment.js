import React, { Component } from 'react'
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom'
import './employment2.scss';
import { FaFacebookF, FaTwitterSquare } from 'react-icons/fa';
import Mobilenav from '../Mobilenav/Mobilenav';

export class Employment extends Component {
    render() {
        return (
            <div className="contact">

				<div className="desktopNavPriv">
                    <ul >
                        <li><a className="btn" href="/">Home</a></li>
                        <li><a className="btn" href="#reservationsAnchor">Reservations</a></li>
                        {/* <img className="acorn" src={Icon}/> */}
                        <li><Link to="/private-dining" className="btn">Private Dining</Link></li>
                        <li><Link to="/about" className="btn" href="/">About</Link></li>
                    </ul>
                </div> 
					<Mobilenav />
                            <div className="contactContainer">
							<h1 className="contactHeading">Please Paste Your Cover Letter and Attach Your Resume</h1>
                			<form action="//formspree.io/james@lusciden.com" method="POST">
								<div class="fields">
									<div class="field half">
										<input type="text" name="name" id="name" placeholder="Name" className="fieldCon" id="inputCon"/>
									</div>
									<div class="field half">
										<input type="email" name="email" id="email" placeholder="Email" className="fieldCon" />
									</div>
									<div class="field">
										<textarea name="message" id="message" placeholder="Message" rows="7" className="fieldCon" id="messageForm"></textarea>
									</div>
                                    <div class="field">
										<input type="file" name="attachment"></input>
									</div>
								</div>
								<ul class="actions">
									<li><input type="submit" value="Send Message" class="button primary" className="buttonEmp" /></li>
								</ul>
							</form>
							<p className="footerMessage">Denver Acorn 2019 - Brought to you by <a href="http://lusciden.com
                ">Lusciden</a></p>
				<div className="socialFooterCon">
                    <a href="https://www.facebook.com/denveracorn/?ref=br_rs"><FaFacebookF className="socialCon" /></a><a href="https://twitter.com/acorn_Denver?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><FaTwitterSquare className="social2Con" /></a>
                </div>
            </div>
            </div>
        )
    }
}

export default Employment