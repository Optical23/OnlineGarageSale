import React from 'react';

const ItemList = ({items}) => {
    if(!items.length){
        return <h5>No items in this store</h5>
    }
    return (
        <div>
            {items && 
            items.map(item => (
                <div className='row'>
                    {item.item_name}
                </div>
            ))}
        </div>
    );
};

export default ItemList;