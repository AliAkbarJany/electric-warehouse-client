import React from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

const AddDevice = () => {

    const handleAdd = event => {
        event.preventDefault()
        const name = event.target.name.value
        const description = event.target.description.value
        const price = event.target.price.value
        const supplier = event.target.supplier.value
        const quantity = event.target.quantity.value
        const img = event.target.img.value
        // console.log(img)
        console.log(name, description, price, supplier, quantity, img)

        // const devices={name,description,price,supplier,quantity,img}
        const devices = {
            name: event.target.name.value,
            description: event.target.description.value,
            price: event.target.price.value,
            supplier: event.target.supplier.value,
            quantity: event.target.quantity.value,
            img

        }
        console.log(devices)


        // const url = `https://electric-warehose-server.onrender.com/devices`
        fetch('https://electric-warehose-server.onrender.com/devices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(devices)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
            })

    }
    return (

        <div className='flex justify-center items-center '>

            <div class="card lg:max-w-lg bg-base-100 shadow-xl image-full">
                {/* <figure><img src="" alt="Shoes" /></figure> */}
                <div class="card-body">
                    <h2 class="text-3xl font-bold">Add a Product</h2>
                    <form onSubmit={handleAdd} className='grid gap-3 justify-items-center'>

                        <input type="text" name='name' placeholder="Enter Product Name" class="input  text-red-400 input-bordered w-full max-w-xs" />

                        <textarea name="description" class="textarea textarea-bordered text-black w-full" placeholder="Write your description"></textarea>

                        <input type="text" name='price' placeholder="Price" class="input text-red-500 input-bordered w-full max-w-xs" />

                        <input type="text" name='supplier' placeholder="Supplier" class="input  text-red-400 input-bordered w-full max-w-xs" />


                        <input type="text" name='quantity' placeholder=" Quantity" class="input text-red-500 input-bordered w-full max-w-xs" />

                        <input type="text" name='img' placeholder="Enter your photo URL link" class="input text-red-500 input-bordered w-full max-w-xs" />

                        {/* <input type="submit" value='PRODUCT  ADD' class="input text-red-500 btn-outline btn-accent input-bordered w-full font-bold" /> */}
                        {/* <Button variant="primary" type="submit">
                            Add A Device
                        </Button> */}
                        <button class="btn btn-success" type='submit'>
                            Add A Device
                        </button>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddDevice;