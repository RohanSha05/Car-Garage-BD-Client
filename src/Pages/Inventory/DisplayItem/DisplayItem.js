import { Button } from 'bootstrap';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const DisplayItem = ({ displayItem }) => {
    const { id, name, img, price, description, supplier, quantity } = displayItem;
    const navigate = useNavigate();
    const navigateItemDetail = id => {
        navigate(`/item/${id}`)
    }
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
                        <button onClick={() => navigateItemDetail(id)} className='btn btn-info'>Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayItem;