import React, { useEffect, useState } from 'react';
import DisplayItem from '../DisplayItem/DisplayItem';

const DisplayItems = () => {
    const [displayItems, setDisplayItems] = useState([]);

    useEffect(() => {
        fetch('https://ancient-crag-99088.herokuapp.com/item')
            .then(res => res.json())
            .then(data => setDisplayItems(data))
    }, [])

    const displaySixItem = displayItems.slice(0, 6)
    return (
        <div className='row row-cols-1 row-cols-lg-4 row-cols-md-2 g-4 mt-5'>
            {
                displaySixItem.map(displayItem => <DisplayItem
                    key={displayItem._id}
                    displayItem={displayItem}>
                </DisplayItem>)
            }
        </div>
    );
};

export default DisplayItems;