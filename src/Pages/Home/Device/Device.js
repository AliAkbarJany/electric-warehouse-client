import React from 'react';
import { Link, useNavigate } from 'react-router-dom'
import './Device.css'

const Device = ({ device }) => {
    const { _id, name, description, price, quantity, supplier, img } = device;
    const navigate = useNavigate()

    const navigateToInventory = id => {
        navigate(`/inventory/${id}`)
    }
    return (
        <div className='service-container'>

            <img className='w-100' src={img} alt="image" />
            <h2><span className='font-bold'>Name : </span>{name}</h2>
            <p><span className='font-bold'>Description : </span> {description}</p>
            <p><span className='font-bold'>Price : </span> {price}</p>
            <p><span className='font-bold'>Supplier : </span> {supplier}</p>
            <p><span className='font-bold'>Quantity : </span> {quantity}</p>
            
                <button onClick={() => navigateToInventory(_id)} className='btn btn-active btn-accent'>Update</button>
        </div>
    );
};

export default Device;