import React from 'react';
import './Brand.css'

const Brand = ({brand}) => {
    const {img}=brand
    return (
        <div className='brand-container'>
            <img src={img} alt="" />
        </div>
    );
};

export default Brand;