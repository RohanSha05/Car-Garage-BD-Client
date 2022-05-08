import { Button } from 'bootstrap';
import React from 'react';
import { Card, Col, Row } from 'react-bootstrap';

const Item = ({ item }) => {
    const { id, name, description, img, price, quantity, supplier } = item;
    return (
        <div>
            <div classNameName="col">
                <div className="card">
                    <img src={img} className="card-img-top w-75 mx-auto" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Name: {name}</h5>
                        <p className="card-text">Id: {id}</p>
                        <p className="card-text">Price: {price}</p>
                        <p className="card-text">Details: {description}</p>
                        <p className="card-text">Quantity: {quantity}</p>
                        <p className="card-text">Supplier: {supplier}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Item;
