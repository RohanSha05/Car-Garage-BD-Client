import { Button } from 'bootstrap';
import React from 'react';
import { Form } from 'react-bootstrap';

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
            <h2>Add New Item</h2>
            <form onSubmit={handleAddItem}>
                <div class="form-group">
                    <input type="text" class="form-control" name="name"
                        aria-describedby="emailHelp" placeholder="name" />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Image" name='image' />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="description" name='description' />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="Price" name='price' />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="quantity" name='quantity' />
                </div>
                <div class="form-group">
                    <input type="text" class="form-control" placeholder="supplier" name='supplier' />
                </div>
                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </div>
    );
};

export default AddItems;