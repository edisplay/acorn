import React, { Component } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Image1 from './img/gal-1.jpg';
import Image2 from './img/gal-2.png';
import Image3 from './img/gal-3.png';
import Image4 from './img/gal-4.jpg';
import Image5 from './img/gal-5.png';
import Image6 from './img/gal-6.jpg';
import Image7 from './img/gal-7.jpg';
import '../../sass/_gallery.scss';

export class Gallery extends Component {
    render() {
        return (
            <div className="gallery">
                <img src={Image1} data-aos='fade-down' alt="Gallery image 1" className="galleryImg" id="galleryImg1" />
                <img src={Image2} data-aos='fade-up' alt="Gallery image 2" className="galleryImg" id="galleryImg2" />
                <img src={Image3} data-aos='fade-up' alt="Gallery image 3" className="galleryImg" id="galleryImg3" />
                <img src={Image4} data-aos='fade-right' alt="Gallery image 4" className="galleryImg" id="galleryImg4" />
                <img src={Image5} data-aos='fade-left' alt="Gallery image 5" className="galleryImg" id="galleryImg5" />
                <img src={Image6} data-aos='fade-up' alt="Gallery image 6" className="galleryImg" id="galleryImg6" />
                <img src={Image7} data-aos='fade-down' alt="Gallery image 7" className="galleryImg" id="galleryImg7" />
            </div>
        )
    }
}

export default Gallery
