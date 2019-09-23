import React, { Component } from 'react';
import GoogleMapReact from 'google-map-react';
import Map from '../Map/Map';
import '../../sass/_hours.scss';

export class Hours extends Component {
    render() {
        return (
            <div className="hours">
                <div className="card" id="hoursCard">
                <div className="card" id="hoursCardInner">
                <div className="hoursContent">
                    <p>Hours:</p>
                    <br/>
                    <p>Monday-Closed</p>
                    <p>Tuesday-11:30A-10p</p>
                    <p>Wednesday-11:30A-10p</p>
                    <p>Thursday-11:30A-10p</p>
                    <p>Friday-11:30A-10p</p>
                    <p>Saturday-11:30A-10p</p>
                    <p>Sunday-11:30A-10p</p>
                    <p className="locale">Location - 3350 Brighton Boulevard, Denver, CO, 80216</p>
                    <p className="locale">Phone - (720) 542 - 3721</p>
                    <p id="locale1">Would you like to join the team? Click here.</p>
                </div>
                </div>
                </div>
                <div className="map">
                    <Map className="mapActual"/>
                </div>
            </div>
        )
    }
}

export default Hours
