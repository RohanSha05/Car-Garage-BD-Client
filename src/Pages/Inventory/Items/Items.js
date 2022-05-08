import React, { useEffect, useState } from 'react';
import { Button } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import AddItems from '../../AddItems/AddItems';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);
    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    const navigate = useNavigate();
    const navigateAddItem = _id => {
        navigate(`/additems`)
    }
    return (
        <div>

            <div className='row row-cols-1 row-cols-lg-6 row-cols-md-2 g-2 mt-5 p-3'>
                {
                    items.map(item => <Item
                        key={item._id}
                        item={item}
                        items={items}
                        setItems={setItems}
                    >
                    </Item>)
                }
            </div>
            <div className="d-grid gap-2">
                <Button onClick={navigateAddItem} variant="danger" size="md" className='w-50 mx-auto mt-3'>
                    Add More Item
                </Button>
            </div>
        </div>
    );
};

export default Items;