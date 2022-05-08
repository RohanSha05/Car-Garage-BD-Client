import React, { useEffect, useState } from 'react';
import Item from '../Item/Item';

const Items = () => {
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/item')
            .then(res => res.json())
            .then(data => setItems(data))
    }, [])
    return (
        <div className='row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 mt-5'>
            {
                items.map(item => <Item
                    key={item._id}
                    item={item}>
                </Item>)
            }
        </div>
    );
};

export default Items;