import { Button } from 'bootstrap';
import React from 'react';

const DisplayItem = ({ displayItem }) => {
    const { name, img, price, description, supplier, quantity } = displayItem
    return (
        <div>
            <div classNameName="col">
                <div className="card">
                    <img src={img} className="card-img-top w-75 mx-auto" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Name: {name}</h5>
                        <p className="card-text">Price: {price}</p>
                        <p className="card-text">Details: {description}</p>
                        <p className="card-text">Quantity: {quantity}</p>
                        <p className="card-text">Supplier: {supplier}</p>
                        <button className='btn btn-info'>Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayItem;