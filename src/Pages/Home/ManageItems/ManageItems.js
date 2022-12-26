import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import useDevices from '../../../hooks/useDevices';
import DeleteAdd from '../DeleteAdd/DeleteAdd';

const ManageItems = () => {
    // const [user] = useAuthState(auth);
    // console.log(user.email)
    const [devices] = useDevices()
    return (
        <div>
            <h2 className='text-center'>Manage Items page:{devices.length}</h2>
            <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                {
                    devices.map(device => <DeleteAdd
                        key={device._id}
                        device={device}
                    ></DeleteAdd>)
                }
            </div>
        </div>
    );
};

export default ManageItems;