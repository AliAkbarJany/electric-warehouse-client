import React, { useEffect, useState } from 'react';
import MyItem from '../MyItem/MyItem';

const MyItems = () => {
    const [allItems, setAllItems] = useState([])
    // pagination..
    const [deviceCount, setDeviceCount] = useState(0)
    const [page,setPage]=useState(0)
    const [pageSize,setPageSize]=useState(9)

    useEffect(() => {
        fetch('https://safe-crag-17725.herokuapp.com/allDevicesCount')
            .then(res => res.json())
            .then(data => {
                console.log(data)
                const count = data.count;
                console.log(count)
                const pages = Math.ceil(count / 9)
                setDeviceCount(pages)
            })
    }, [])
    useEffect(() => {
        fetch(`https://safe-crag-17725.herokuapp.com/allDevices?page=${page}&pageSize=${pageSize}`)
            .then(res => res.json())
            .then(data => setAllItems(data))
    }, [page,pageSize])

    return (
        <div>
            <h2 className='text-center'>my items page:{allItems.length}</h2>
            <div className='pt-20 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>

                {
                    allItems.map(item => <MyItem
                        item={item}
                    ></MyItem>)
                }
            </div>

            <div className='text-center mt-5'>
                {
                    [...Array(deviceCount).keys()]
                    .map(number=><button 
                        onClick={()=>setPage(number)} 
                        style={{"marginRight":10}} 
                        className='btn btn-lg btn-accent' >{number}
                        </button>)
                }
                {/* {pageSize} */}
                <select onChange={e=> setPageSize(e.target.value)} >
                    <option value="5">5</option>
                    <option value="10" selected >9</option>
                    <option value="15">15</option>
                </select>
            </div>

            

        </div>
    );
};

export default MyItems;