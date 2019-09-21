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
                        <h2 className="lunchHeading">Lunch</h2>
                        <p className="menuItems">Candied Pecans (3.50)</p>
                        <p className="menuItems">Pork Rinds (7.50)</p>
                        <p className="menuItems">Green Olives (7.50)</p>
                        <p className="menuItems">Heirloom Blue Cornbread (10.50)</p>
                        <p className="menuItems">Local Chicory (14.50)</p>
                        <p className="menuItems">Red Shrimp Curry (18.50)</p>
                        <p className="menuItems">Oak-Roasted Monkfish (17.50)</p>
                        <p className="menuItems">Moroccan Fried Chicken (15.50)</p>
                        <p className="menuItems">Pork Belly Pastrami (15.50)</p>
                        <p className="menuItems">Wagyu Beef (16.50)</p>
                        <p className="menuItems">Grilled Double Cheeseburger (15.50)</p>
                        <p className="menuItems">Butter Beans (16.50)</p>
                        <p className="menuItems">Kale and Apple Salad (14.50)</p>
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
                        <p className="menuItems">Southeast Visions (5.00)</p>
                        <p className="menuItems">Tea Time (6.00)</p>
                        <p className="menuItems">Rehydrator (6.00)</p>
                        <p className="menuItems">Housemade Ginger Beer (5.00)</p>
                        <br/>
                        <h2 className="lunchHeading">Low Booze</h2>
                        <p className="menuItems">Old Havana (10.00)</p>
                        <p className="menuItems">Summer Breeze (10.00)</p>
                        <p className="menuItems">A Walk in the Park (10.00)</p>
                        <br/>
                        <h2 className="lunchHeading">High Booze</h2>
                        <p className="menuItems">Acorn Bloody Mary (13.00)</p>
                        <p className="menuItems">Monks Garden (14.00)</p>
                        <p className="menuItems">Acorn Manhattan (16.00)</p>
                        <p className="menuItems">Across the Atlantic (16.00)</p>
                        <p className="menuItems">Retribution (14.00)</p>
                        <p className="menuItems">Afternoon at the Buena Vista (14.00)</p>
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
                        <p className="menuItems">Aloe Martini (14.00)</p>
                        <p className="menuItems">Flatiron Meadow (12.00)</p>
                        <p className="menuItems">A Tipple in the Rain (13.00)</p>
                        <p className="menuItems">Harvey for President (13.00)</p>
                        <br />
                        <h2 className="lunchHeading">Beer</h2>
                        <p className="menuItems"></p>
                        <p className="menuItems">Four Falls Heizenbock (9.00)</p>
                        <p className="menuItems">Hfs IPA (8.00)</p>
                        <p className="menuItems">Golden Monkey Tripel (8.00)</p>
                        <p className="menuItems">Nitro Milk Stout (6.50)</p>
                        <p className="menuItems">Tropical Depression IPA (7.00)</p>
                        <p className="menuItems">Roadie Radler (6.50)</p>
                        <p className="menuItems">Mischief Golden Ale (15.00)</p>
                        <p className="menuItems">Two Hearted Ale (7.00)</p>
                        <p className="menuItems">Bubblin Brute IPA (9.00)</p>
                        <p className="menuItems">Tank 7 (10.00)</p>
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
