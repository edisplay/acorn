import React, { Component } from 'react'
import './_gsaphero.scss';

export class Gsaphero extends Component {
    render() {
        return (
            <div className="gsaphero">
                <h1 className="gsapHeading">A feast for your eyes as much as your palate.</h1>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/2.1.3/TweenMax.min.js" integrity="sha256-lPE3wjN2a7ABWHbGz7+MKBJaykyzqCbU96BJWjio86U=" crossorigin="anonymous"></script>
                <script src="https://cdnjs.cloudflare.com/ajax/libs/three.js/108/three.min.js" integrity="sha256-3mBEX8I0uMLF7+AUjJeTCelosuorzYpqwBMBPDTyQqY=" crossorigin="anonymous"></script>
                <script src="./hover.js"></script>
                <script src="./app2.js"></script>
            </div>
        )
    }
}

export default Gsaphero
