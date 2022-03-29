import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_STORE } from '../utils/queries';
import ItemList from '../components/ItemList';
const StoreController = ({storeId}) => {
    const {loading, data} = useQuery(QUERY_STORE, {
        variables: {id: storeId},
    });
    
    const storeInfo = data?.store || {};
    const itemsInfo = data?.store.items || [];
    console.log(itemsInfo);
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
            <ItemList
                items={itemsInfo}
            />
            </>
        )}
    </div>
    </>
    );
}

export default StoreController;