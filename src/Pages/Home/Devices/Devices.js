import React, { useEffect, useState } from 'react';
import Device from '../Device/Device';
import './Devices.css'

const Devices = () => {
    const [devices, setDevices] = useState([])

    const preciseDevice=devices.slice(0,6)

    useEffect(() => {
        fetch('https://safe-crag-17725.herokuapp.com/devices')
            .then(res => res.json())
            .then(data => setDevices(data))
    }, [])
    return (
        <div className='mt-5'>
            <h2 className='text-4xl text-center text-green-500 font-bold py-4'>All devices:{devices.length}</h2>
            <div className='devices-container' >
                {
                    preciseDevice.map(device => <Device
                        key={device._id}
                        device={device}
                    >

                    </Device>)
                }
            </div>
        </div>
    );
};

export default Devices;