import React from 'react'
import PropTypes from 'prop-types';

const GifGridItem = ({ img }) => {

    const { title, url } = img;

    return (
        <div className="card animate__animated animate__fadeIn">
            <h3>{ title }</h3>
            <img src={ url } alt={ title } />
        </div>
    )
}

GifGridItem.propTypes = {
    img : PropTypes.object
};

export default GifGridItem;

