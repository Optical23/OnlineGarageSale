import React from 'react';
import {useQuery} from '@apollo/client';
import {QUERY_ORDER} from '../utils/queries';
function BuyerDisplay({item, bid}) {
    const {loading, data} = useQuery(QUERY_ORDER, {
        variables: {id: item, bidAmount: bid},
    });
    const order = data?.order || {};
    console.log(order);
    return ( 
    <div>
        {order.buyer ? (<>{order.buyer.email}</>):(<div>No email</div>)}
        
    </div> );
}

export default BuyerDisplay;