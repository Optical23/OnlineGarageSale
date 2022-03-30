import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_ITEM } from '../utils/queries';

function StoreThumbnail({itemId}) {
    const {loading, data } = useQuery(QUERY_ITEM, {
        variables: {id: itemId}
    });
    console.log(itemId);
    const item = data?.item || {};
    console.log(item);
    return ( 
        <>
        {loading ? (
            <div>Loading..</div>
        ):(
            <img className='img-thumbnail' src={item.image}></img>
        )}
        
        </>
     );
}

export default StoreThumbnail;