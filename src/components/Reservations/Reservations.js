import React, { Component, useEffect } from 'react';
import '../../sass/_reservations.scss';

export class Reservations extends Component {
    render() {
        return (
            <div className="reservations">
                <div className="resHeading">
                    <div className="button"><a href="https://www.opentable.com/acorn?avt=eyJ2IjoxLCJtIjowLCJwIjowfQ&corrid=70ef5610-e83f-48c9-9445-913aea7c48b8&p=2&sd=2019-11-10+19%3A00">Reservations</a></div>
                    <div className="divider"></div>
                </div>
                <h1 className="menuHeading" id="menuAnchor">Menu</h1>
            </div>
        )
    }
}

export default Reservations
