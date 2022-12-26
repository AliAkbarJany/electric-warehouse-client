import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';

const Inventory = () => {
    const { id } = useParams()
    const [device, setdevice] = useState({})
    useEffect(() => {
        const url = `https://safe-crag-17725.herokuapp.com/devices/${id}`
        fetch(url)
            .then(res => res.json())
            .then(data => setdevice(data))
    }, [])
    return (
        <div className='grid justify-center items-center h-screen'>
            <div class="card card-compact max-w-lg bg-base-100 shadow-xl">
                <figure><img src={device.img} alt="image" /></figure>
                <div class="card-body">
                    <h2> <span className='font-bold'>Name : </span>{device.name}</h2>
                    <p><span className='font-bold'>Description : </span> {device.description}</p>
                    <p><span className='font-bold'>Price : </span> {device.price}</p>
                    <p><span className='font-bold'>Supplier : </span> {device.supplier}</p>
                    <p><span className='font-bold'>Quantity : </span> {device.quantity}</p>
                    <div class="card-actions justify-center">
                        <button class="btn btn-primary">Delivered</button>
                    </div>
                </div>
            </div>
            <div className='text-3xl text-green-500 font-bold mt-5'>
                <Link to='/manageItems'> Click Here To Manage Inventory</Link>
            </div>

        </div>
    );
};

export default Inventory;