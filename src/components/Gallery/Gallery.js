import React, { Component } from 'react';
import Image1 from './img/gal-1.jpg';
import Image2 from './img/gal-2.png';
import '../../sass/_gallery.scss';

export class Gallery extends Component {
    render() {
        return (
            <div className="gallery">
                <img src={Image1} alt="Gallery image 1" className="galleryImg1" />
                <img src={Image2} alt="Gallery image 1" className="galleryImg2" />
            </div>
        )
    }
}

export default Gallery
