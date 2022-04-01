import React from 'react';

const ItemList = ({items}) => {
    if(!items.length){
        return <h5>No items in this store</h5>
    }
    return (
        <div>
            {items && 
            items.map(item => (
                <div key={item._id} className='row'>
                    <p>Item: {item.item_name} | Description: {item.description} | Condition: {item.condition} | Asking Price: {item.asking_price}</p>
                </div>
            ))}
        </div>
    );
};

export default ItemList;