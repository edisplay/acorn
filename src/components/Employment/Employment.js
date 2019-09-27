import React, { Component } from 'react'
import './employment.scss';

export class Employment extends Component {
    render() {
        return (
            <div>
                			<form action="POST" data-netlify="true" className="contactForm">
								<div class="fields">
									<div class="field half">
										<input type="text" name="name" id="name" placeholder="Name" />
									</div>
									<div class="field half">
										<input type="email" name="email" id="email" placeholder="Email" />
									</div>
									<div class="field">
										<textarea name="message" id="message" placeholder="Message" rows="7"></textarea>
									</div>
                                    <div class="field">
										<input type="file" name="myfile" id="myfile" placeholder="Upload File" rows="7"></input>
									</div>
								</div>
                                <div class="field">
                                    <div data-netlify-recaptcha="true">

                                    </div>
                                </div>
								<ul class="actions">
									<li><input type="submit" value="Send Message" class="button primary" /></li>
								</ul>
							</form>
            </div>
        )
    }
}

export default Employment
