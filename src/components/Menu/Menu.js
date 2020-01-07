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
                        <h2 className="lunchHeading">Snacks</h2>
                        <p className="menuItems">Reunion Sourdough (4)</p>
                        <p className="menuItems">Candied Pecans (4)</p>
                        <p className="menuItems">Pork Rinds (8)</p>
                        <p className="menuItems">Green Olives (8)</p>
                        <p className="menuItems">Heirloom Blue Cornbread (14)</p>
                        <h2 className="lunchHeading">Shared</h2>
                        <p className="menuItems">Kale + Apple Salad (14)</p>
                        <p className="menuItems">Brussel Sprouts (12)</p>
                        <p className="menuItems">Little Gem (15)</p>
                        <p className="menuItems">Butter Beans (16)</p>
                        <p className="menuItems">Rock Shrimp Pozole Verde (18)</p>
                        <p className="menuItems">Brillat Savarin Agnolotti (18)</p>
                        <h2 className="lunchHeading">Large Plates</h2>
                        <p className="menuItems">Moroccan Fried Chicken (15)</p>
                        <p className="menuItems">Wagyu Beef (16)</p>
                        <p className="menuItems">Braised Pork Belly (17)</p>
                        <p className="menuItems">King Salmon (21)</p>
                        <p className="menuItems">Dry-Aged Double Cheeseburger (15)</p>
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
                        <p className="menuItems">Northwest Visions (6)</p>
                        <p className="menuItems">Tea Time (6)</p>
                        <p className="menuItems">Rehydrator (6)</p>
                        <p className="menuItems">Acorn Ginger Beer (6)</p>
                        <h2 className="lunchHeading">Low Booze</h2>
                        <p className="menuItems">Americano (10)</p>
                        <p className="menuItems">Acorn Sherry Cobbler (12)</p>
                        <h2 className="lunchHeading">High Booze</h2>
                        <p className="menuItems">Guardin' Secrets (16)</p>
                        <p className="menuItems">Hallowed Kiss (15)</p>
                        <p className="menuItems">Across The Atlantic (16)</p>
                        <p className="menuItems">Acorn Margarita (13)</p>
                        <p className="menuItems">Acorn Old Fashioned (12)</p>
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
                        <p className="menuItems">On The Map (14)</p>
                        <p className="menuItems">Orchard Sour (16)</p>
                        <p className="menuItems">Acorn Bloody Mary (15)</p>
                        <h2 className="lunchHeading">Beer</h2>
                        <p className="menuItems"></p>
                        <p className="menuItems">Odell IPA (8)</p>
                        <p className="menuItems">Pug Ryan's Helles (7)</p>
                        <p className="menuItems">Owl Eyes Tart Cherry Porter (9)</p>
                        <p className="menuItems">Avery IPA (7)</p>
                        <p className="menuItems">Banquet (6)</p>
                        <p className="menuItems">Drumroll IPA (8)</p>
                        <p className="menuItems">Pineapple Agave Cider (9)</p>
                        <p className="menuItems">Daura Lager (9)</p>
                        <p className="menuItems">Black Lager (9)</p>
                        <p className="menuItems">Tank 7 (9)</p>
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
