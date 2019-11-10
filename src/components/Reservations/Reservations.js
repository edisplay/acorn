import React, { Component, useEffect } from 'react';
import '../../sass/_reservations.scss';

export class Reservations extends Component {
    render() {
        return (
            <div className="reservations">
                <div className="resHeading">
                    <h2 id="reservationsAnchor">Reservations</h2>
                    <div className="divider"></div>
                    <div className="openTable">
                    </div>
                </div>
                <h1 className="menuHeading" id="menuAnchor">Menu</h1>
            </div>
        )
    }
}

export default Reservations
