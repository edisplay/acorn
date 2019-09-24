import React, { Component } from 'react'
import PropTypes from 'prop-types';
import axios from 'axios';
import './_dishitem.scss';

export class Dishitem extends Component {
    state = {
        imgUrl: '',
        isLoaded: false
    }

    static propTypes = {
        dish: PropTypes.object.isRequired
    }

    componentDidMount() {
        const { featured_media } = this.props.dish
        const getImageUrl = axios.get(`http://localhost:8000/wp-json/wp/v2/media/${featured_media}`);

        Promise.all([getImageUrl]).then(res => {
            this.setState({
                imgUrl: res[0].data.media_details.sizes.full.source_url,
                isLoaded: true
            });
        });
    }

    render() {
        const { title, content } = this.props.dish;
        const {imgUrl, isLoaded} = this.state;
        if(isLoaded) {
            return (
                <div>
                    <div className="seasonalApiOutput">
                        <h2 className="dishTitle">{ title.rendered }</h2>
                        <img className="dishImage" src={ imgUrl } alt={title.rendered} />
                        <div className="dishContent" dangerouslySetInnerHTML={{__html: content.rendered}} />
                    </div>
                    <div className="mobileApiOutput">
                    <h2 className="mobileDishTitle">{ title.rendered }</h2>
                        <img className="mobileDishImage" src={ imgUrl } alt={title.rendered} />
                        <div className="mobileDishContent" dangerouslySetInnerHTML={{__html: content.rendered}} />
                    </div>
                </div>
            )
        }

        return null;
    }
}

export default Dishitem
