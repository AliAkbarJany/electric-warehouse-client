import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const DeleteAdd = ({ device }) => {
    const [devices, setDevices] = useState([])
    const { _id, name, description, price, quantity, supplier, img } = device;
    const handleDelete=id=>{
        const proceed =window.confirm('Are you sure to Delete Device')
        if(proceed){
            fetch(`https://safe-crag-17725.herokuapp.com/devices/${id}`,{
                method: 'DELETE',
            })
            .then(res=>res.json())
            .then(data=>{
                console.log(data)
                const remaining=devices.filter(device=> device._id !== id)
                setDevices(remaining)
            })
        }
    }
    return (
        <div>
            <div class="card lg:max-w-lg bg-base-100 shadow-xl">
                <figure class="px-10 pt-10">
                    <img src={img} alt="Shoes" class="rounded-xl" />
                </figure>
                <div class="card-body items-center text-center">
                    <h2 class="card-title text-emerald-500">{name}</h2>
                    <p><span className='font-bold'>Description : </span> {description}</p>
                    <p><span className='font-bold'>Price : </span> {price}</p>
                    <p><span className='font-bold'>Supplier : </span> {supplier}</p>
                    <p><span className='font-bold'>Quantity : </span> {quantity}</p>
                    <div class="card-actions">
                        <button onClick={()=>handleDelete(_id)} class="btn btn-warning">Delete</button>
                    </div>
                    <div class="card-actions">
                        <Link to='/addDevices'><button class="btn btn-success">Add Device</button></Link>  
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DeleteAdd;