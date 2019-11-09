import React, { Component, useEffect } from 'react';
import '../../sass/_reservations.scss';

export class Reservations extends Component {
    // constructor(props) {
    //     super(props);
    // }

    // componentDidMount() {
    //     const script = document.createElement("script");

    //     script.src = '//www.opentable.com/widget/reservation/loader?rid=412810&type=standard&theme=wide&iframe=true&domain=com&lang=en-US&newtab=false';
    //     script.async = true;

    //     document.body.appendChild(script);
    // }

    render() {
        return (
            <div className="reservations">
                <div className="resHeading">
                    <h2 id="reservationsAnchor">Reservations</h2>
                    <div className="divider"></div>
                    <div className="openTable">
                    <script type='text/javascript' src='//www.opentable.com/widget/reservation/loader?rid=412810&type=standard&theme=wide&iframe=true&domain=com&lang=en-US&newtab=false'></script>                    </div>
                </div>
                <h1 className="menuHeading" id="menuAnchor">Menu</h1>
            </div>
        )
    }
}

export default Reservations
