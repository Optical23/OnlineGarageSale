import React from 'react';
import {useQuery} from '@apollo/client';
import {QUERY_BIDS} from '../utils/queries';
import BuyerDisplay from '../components/BuyerDisplay';
import {getHighest} from '../utils/highestBid';

function OrderInfo({item}) {
    const {loading, data} = useQuery(QUERY_BIDS, {
        variables: {id: item._id},
    });
    const bids = data?.bids || [];
    var highestBid = getHighest(bids);
    return ( 
        <div>
            <h5 className='font-weight-normal'>Email: <BuyerDisplay item={item._id} bid={highestBid}/></h5>
        </div>
        
     );
};

export default OrderInfo;