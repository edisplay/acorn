import React, { Component } from 'react';
import { FaFacebookF, FaTwitterSquare } from 'react-icons/fa';
import '../../sass/_footer.scss';

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <div className="twelve columns">
                    <div className="messageContainer">
                        <p className="footerMessage">Denver Acorn 2019 - Brought to you by <a href="http://lusciden.com
                    ">Lusciden</a></p>
                    </div>
                    <div className="socialLinks">
                        <a href="https://www.facebook.com/denveracorn/?ref=br_rs"><FaFacebookF className="social" /></a><a href="https://twitter.com/acorn_Denver?ref_src=twsrc%5Egoogle%7Ctwcamp%5Eserp%7Ctwgr%5Eauthor"><FaTwitterSquare className="social2" /></a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Footer
