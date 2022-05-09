import React from 'react';
import '../Item/Item.css'

const Item = ({ item, items, setItems }) => {
    const { _id, name, description, img, price, quantity, supplier } = item;
    const handleItemDelete = () => {
        const proceed = window.confirm('Are you sure to delete this product?')
        if (proceed) {
            const url = `https://ancient-crag-99088.herokuapp.com/item/${_id}`;
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
                <div className="card each-item">
                    <img src={img} className="card-img-top w-75 mx-auto" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Model: {name}</h5>
                        <p className="card-text">{_id}</p>
                        <p className="card-text">Price: {price}</p>
                        <p className="card-text">Details: {description}</p>
                        <p className="card-text">Quantity: {quantity}</p>
                        <p className="card-text">Supplier: {supplier}</p>
                        <button onClick={handleItemDelete} className='btn btn-dark'>Delete</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
