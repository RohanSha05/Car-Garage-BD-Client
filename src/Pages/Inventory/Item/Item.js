import React from 'react';

const Item = ({ item, items, setItems }) => {
    const { _id, name, description, img, price, quantity, supplier } = item;
    const handleItemDelete = () => {
        const proceed = window.confirm('Are you sure to delete this product?')
        if (proceed) {

            console.log('deleteting user with id', _id)
            const url = `http://localhost:5000/item/${_id}`;
            fetch(url, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        console.log('deleted')
                        const remainingItems = items.filter(item => item._id !== _id)
                        setItems(remainingItems);
                    }
                })
        }
    }
    return (
        <div>
            <div classNameName="col">
                <div className="card">
                    <img src={img} className="card-img-top w-75 mx-auto" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Name: {name}</h5>
                        <p className="card-text">Id: {_id}</p>
                        <p className="card-text">Price: {price}</p>
                        <p className="card-text">Details: {description}</p>
                        <p className="card-text">Quantity: {quantity}</p>
                        <p className="card-text">Supplier: {supplier}</p>
                        <button onClick={handleItemDelete} className='btn btn-info'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
