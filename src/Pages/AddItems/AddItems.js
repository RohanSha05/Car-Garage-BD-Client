import React from 'react';
import '../AddItems/AddItems.css'


const AddItems = () => {

    const handleAddItem = event => {
        event.preventDefault();
        const img = event.target.image.value;
        const name = event.target.name.value;
        const description = event.target.description.value;
        const price = event.target.price.value;
        const quantity = event.target.quantity.value;
        const supplier = event.target.supplier.value;

        const item = { name, img, description, price, quantity, supplier }

        fetch('http://localhost:5000/item', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(item)
        })
            .then(res => res.json())
            .then(data => {
                console.log('success', data)
            })
    }

    return (
        <div>
            <form className='rounded w-50 mx-auto form mt-5 p-5 mb-5' onSubmit={handleAddItem}>
                <h2 className='text-center'>Please, Add New Item</h2>
                <div className="form-group mb-3">
                    <input type="text" className="form-control" name="name"
                        aria-describedby="emailHelp" placeholder="name" />
                </div>
                <div className="form-group mb-3">
                    <input type="text" className="form-control" placeholder="Image" name='image' />
                </div>
                <div className="form-group mb-3">
                    <input type="text" className="form-control" placeholder="description" name='description' />
                </div>
                <div className="form-group mb-3">
                    <input type="text" className="form-control" placeholder="Price" name='price' />
                </div>
                <div className="form-group mb-3">
                    <input type="text" className="form-control" placeholder="quantity" name='quantity' />
                </div>
                <div className="form-group mb-3">
                    <input type="text" className="form-control" placeholder="supplier" name='supplier' />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddItems;