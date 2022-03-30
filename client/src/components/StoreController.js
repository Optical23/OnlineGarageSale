import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_STORE } from '../utils/queries';
import ItemList from '../components/ItemList';
import ItemForm from '../components/ItemForm';
const StoreController = ({storeId}) => {
    const {loading, data} = useQuery(QUERY_STORE, {
        variables: {id: storeId},
    });
    
    const storeInfo = data?.store || {};
    if(storeInfo.items){
        var itemsInfo = data?.store.items || [];
    }
    return ( 
    <>
    <div className='row'>
        <h2>Name: {storeInfo.store_name}</h2>
    </div> 
    <div className='row'>
        <h4>Items in your store:</h4>
    </div>
    <div className='container'>
        {loading ? (
            <div>loading..</div>
        ):(
            <>
            {itemsInfo ? (<ItemList
                items={itemsInfo}
            />):(<div>You have no items in your store</div>)}
            
            <ItemForm 
                store={storeInfo._id}
            />
            </>
        )}
    </div>
    </>
    );
}

export default StoreController;