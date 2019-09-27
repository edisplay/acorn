import React, { Component } from 'react'
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom'
import './employment2.scss';

export class Employment extends Component {
    render() {
        return (
            <div className="contact">
				<Footer className="footer" />
                            <div className="contactContainer">
							<div className="button" id="employmentButton"><Link to="/">Return Home</Link></div>
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
            </div>
            </div>
        )
    }
}

export default Employment
