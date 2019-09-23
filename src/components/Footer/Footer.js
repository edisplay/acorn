import React, { Component } from 'react'
import '../../sass/_footer.scss';

export class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <p className="footerMessage">Denver Acorn 2019 - Proudly Brought to you by <a href="http://lusciden.com">Lusciden</a></p>
            </div>
        )
    }
}

export default Footer
