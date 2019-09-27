import React, { Component } from 'react'
import './employment2.scss';

export class Employment extends Component {
    render() {
        return (
            <div className="contactContainer">
                			<form action="POST" action="https://formspree.io/james@lusciden.com" className="contactForm">
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
									<li><input type="submit" value="Send Message" class="button primary" className="button" /></li>
								</ul>
							</form>
            </div>
        )
    }
}

export default Employment
