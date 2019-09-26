import React, { Component } from 'react'
import axios from 'axios'
import Dishitem from '../Dishitem/Dishitem';
import '../../sass/_seasonal.scss';
import { tsBooleanKeyword } from '@babel/types';
import { loadPartialConfig } from '@babel/core';

export class Seasonal extends Component {
    state = {
        dishes: [],
        isLoaded: false
    }

    componentDidMount() {
        axios.get('http://?????????/wp-json/wp/v2/dishes')
            .then(res => this.setState({
                dishes: res.data,
                isLoaded: true
            }))
            .catch(err => console.log(err))
    }
    
    render() {
            console.log(this.state);
            const { dishes, isLoaded } = this.state;
            if(isLoaded) {
            return (
                <div className="seasonal">
                    <h1 className="seasonalHeading">Seasonal Dishes</h1>
                    <div className="dishItems">
                        { dishes.map(dish => (
                            <Dishitem key={dish.id} dish={dish} />
                        ))}
                    </div>
                    <div className="polygon"></div>
                </div>
            );
        }

        return <h3>loadPartialConfig..</h3>
    }
}

export default Seasonal
