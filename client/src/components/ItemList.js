import React from 'react';
import {BsTrash} from 'react-icons/bs';
import { useMutation } from '@apollo/client';

const ItemList = ({items}) => {
    const handleDeleteItem = async (event) => {

        try {
            console.log('got this far');
            // const {data} = await deleteItem 
        }catch (event) {
            console.error(event);
        }
    }
    if(!items.length){
        return <h5>No items in this store</h5>
    }
    return (
        <div>
            {items && 
            items.map(item => (
                <div key={item._id} className='row'>
                    <span>Item: {item.item_name} |
                     Description: {item.description} |
                      Condition: {item.condition} |
                       Asking Price: {item.asking_price} | 
                       <button type="button" onClick={handleDeleteItem}>
                           <BsTrash style={{color: "red"}}/>
                        </button>
                       
                       </span>
                </div>
            ))}
        </div>
    );
};

export default ItemList;