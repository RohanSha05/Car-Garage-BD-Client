import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const ItemDetail = () => {
    const { itemId } = useParams();
    const [item, setItem] = useState({});

    useEffect(() => {
        const url = `http://localhost:5000/item/${itemId}`
        fetch(url)
            .then(res => res.json())
            .then(data => setItem(data))

    }, [])
    let { name, id, price, quantity, description, supplier, img } = item;

    const handleQuantity = () => {
        console.log(quantity)
        const newQuantity = quantity - 1;
    }
    return (
        <div>
            <div classNameName="col">
                <div className="card  mt-3">
                    <img src={img} className="card-img-top w-25 mx-auto" alt="..." />
                    <div className="card-body mx-auto">
                        <h5 className="card-title">Name: {name}</h5>
                        <p className="card-text">Id: {id}</p>
                        <p className="card-text">Price: {price}</p>
                        <p className="card-text">Details: {description}</p>
                        <p className="card-text">Quantity: {quantity}</p>
                        <p className="card-text">Supplier: {supplier}</p>
                        <button onClick={handleQuantity} className='btn btn-info'>Delivered</button>
                    </div>
                </div>
            </div>        </div>
    );
};

export default ItemDetail;