import React from 'react';

const MyItem = ({item}) => {
    const{id,name,description,price,supplier,quantity,img}=item
    return (
        <div >
            <div class="card card-compact max-w-lg bg-base-100 shadow-xl">
                <figure><img src={img} alt="image" /></figure>
                <div class="card-body text-center">
                    <h2> <span className='font-bold'>Name : {name} </span> </h2>
                    <p><span className='font-bold'>Description : {description} </span> </p>
                    <p><span className='font-bold'>Price : {price} </span> </p>
                    <p><span className='font-bold'>Supplier : {supplier} </span> </p>
                    <p><span className='font-bold'>Quantity : {quantity} </span> </p>
                    
                </div>
            </div>
        </div>
    );
};

export default MyItem;