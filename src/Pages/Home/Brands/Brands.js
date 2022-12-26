import React from 'react';

import brand1 from '../../../pictures/brands/apple (1).png'
import brand2 from '../../../pictures/brands/lg (1).png'
import brand3 from '../../../pictures/brands/marshall.png'
import brand4 from '../../../pictures/brands/singer (1).png'
import Brand from '../Brand/Brand';

const brands=[
    {id:1,img:brand1},
    {id:2,img:brand2},
    {id:3,img:brand3},
    {id:4,img:brand4},
]

const Brands = () => {
    return (
        <div className='mt-5'>
            <h2 className='text-4xl text-center text-green-500 font-bold py-4'>Brands We Provide</h2>
            <div className='row row-cols-1 row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-3'>
                {
                    brands.map(brand=><Brand 
                        key={brand.id}
                        brand={brand}
                    ></Brand>)
                }
            </div>
        </div>
    );
};

export default Brands;