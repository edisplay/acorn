import React, { Component } from 'react';
import '../../sass/_reservations.scss';

export class Reservations extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        const script = document.createElement("script");

        script.src = "//www.opentable.com/widget/reservation/loader?rid=412810&type=standard&theme=wide&iframe=true&overlay=false&domain=com&lang=en-US";
        script.async = true;

        document.body.appendChild(script);
    }

    render() {
        return (
            <div className="reservations">
                <div className="resHeading">
                    <h2>Reservations</h2>
                    <div className="divider"></div>
                    <div className="openTable">
                        <script className="openTable" type='text/javascript' src='//www.opentable.com/widget/reservation/loader?rid=412810&type=standard&theme=wide&iframe=true&overlay=false&domain=com&lang=en-US'></script>
                    </div>
                </div>
                <h1 className="menuHeading">Menu</h1>
            </div>
        )
    }
}

export default Reservations
