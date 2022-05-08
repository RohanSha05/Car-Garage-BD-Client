import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../DisplayItem/DisplayItem.css'

const DisplayItem = ({ displayItem }) => {
    const { _id, name, img, price, description, supplier, quantity } = displayItem;
    const navigate = useNavigate();
    const navigateItemDetail = _id => {
        navigate(`/item/${_id}`)
    }
    return (
        <div>
            <div classNameName="col">
                <div className="card display-item" style={{ height: 500 }}>
                    <img src={img} className="card-img-top w-75 mx-auto" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Name: {name}</h5>
                        <p className="card-text">Price: {price}</p>
                        <p className="card-text">Details: {description}</p>
                        <p className="card-text">Quantity: {quantity}</p>
                        <p className="card-text">Supplier: {supplier}</p>
                        <button onClick={() => navigateItemDetail(_id)} className='btn btn-dark'>Update</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default DisplayItem;