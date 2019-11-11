import React, { Component } from 'react'
import '../../sass/_menu.scss';

export class Menu extends Component {
    render() {
        return (
            <div className="menu">
                <div className="column" id="menu1">
                    <div className="card">
                        <div className="card" id="cardInner1">
                        <br/>
                        <h2 className="lunchHeading">Shared Plates</h2>
                        <p className="menuItems">Reunion Sourdough (4)</p>
                        <p className="menuItems">Candied Pecans (4)</p>
                        <p className="menuItems">Pork Rinds (8)</p>
                        <p className="menuItems">Green Olives (8)</p>
                        <p className="menuItems">Heirloom Blue Cornbread (14)</p>
                        <p className="menuItems">Kale + Apple (14)</p>
                        <p className="menuItems">Cured Red Trout (16)</p>
                        <p className="menuItems">Heirloom Tomato(18)</p>
                        <p className="menuItems">Dry Aged Wagyu Tartare (20)</p>
                        <p className="menuItems">Golden Rice (17)</p>
                        <p className="menuItems">Jimmy Nardellos (18)</p>
                        <p className="menuItems">Okra + Peppers (18)</p>
                        <p className="menuItems">Mussels + Clams (20)</p>
                        <h2 className="lunchHeading">Large Plates</h2>
                        <p className="menuItems">Oak Roasted Half Chicken (32)</p>
                        <p className="menuItems">16oz. Lamb Shank (36)</p>
                        <p className="menuItems">Dry Aged Half Duck(47)</p>
                        <p className="menuItems">24oz. Bone-In Dry-Aged Ribeye (107)</p>
                        </div>
                    </div>
                    <div className="card" id="innest1">
                        </div>
                </div>
                <div className="column" id="menu2">
                <div className="card">
                <div className="card" id="cardInner2">
                <br/>
                        <h2 className="lunchHeading">Booze Free</h2>
                        <p className="menuItems">Southeast Visions (5)</p>
                        <p className="menuItems">Tea Time (6)</p>
                        <p className="menuItems">Rehydrator (6)</p>
                        <p className="menuItems">Housemade Ginger Beer (5)</p>
                        <br/>
                        <h2 className="lunchHeading">Low Booze</h2>
                        <p className="menuItems">Old Havana (10)</p>
                        <p className="menuItems">Summer Breeze (10)</p>
                        <p className="menuItems">A Walk in the Park (10)</p>
                        <br/>
                        <h2 className="lunchHeading">High Booze</h2>
                        <p className="menuItems">Acorn Bloody Mary (13)</p>
                        <p className="menuItems">Across the Atlantic (16)</p>
                        <p className="menuItems">Retribution (14)</p>
                        <p className="menuItems">The Hive (15)</p>
                        <p className="menuItems">Harvey for President (13)</p>
                        </div>
                    </div>
                    <div className="card" id="innest2">
                        </div>
                </div>
                <div className="column" id="menu3">
                <div className="card">
                <div className="card" id="cardInner3">

                <br/>
                        <h2 className="lunchHeading">High Booze cont...</h2>
                        <p className="menuItems">Aloe Martini (14)</p>
                        <p className="menuItems">Flatiron Meadow (12)</p>
                        <p className="menuItems">A Tipple in the Rain (13)</p>
                        <p className="menuItems">Guard'n Secrets (13)</p>
                        <p className="menuItems">On the Map (14)</p>
                        <br />
                        <h2 className="lunchHeading">Beer</h2>
                        <p className="menuItems"></p>
                        <p className="menuItems">Pineapple Agave Cider (10)</p>
                        <p className="menuItems">Space Camper IPA (7)</p>
                        <p className="menuItems">Sculpin IPA (7)</p>
                        <p className="menuItems">Cold Beer Amber Lager (7)</p>
                        <p className="menuItems">Roadie Radler (6.50)</p>
                        <p className="menuItems">River Right Tropical Wheat Ale (8)</p>
                        <p className="menuItems">Scuba Steve American IPA (7)</p>
                        <p className="menuItems">Banquet (3.5)</p>
                        <p className="menuItems">Tank 7 (10)</p>
                        </div>
                    </div>
                    <div className="card" id="innest3">
                        </div>
                </div>
            </div>
        )
    }
}

export default Menu
