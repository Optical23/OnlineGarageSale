import React from 'react';
import {useQuery} from '@apollo/client';
import {QUERY_BIDS} from '../utils/queries';

function OrderInfo({item}) {
    const {loading, data} = useQuery(QUERY_BIDS, {
        variables: {id: item._id},
    });
    const bids = data?.bids || [];
    var highestBid = 0;
    const getHighest = (bids) => {
        var largest = 0;
        for (let i = 0; i < bids.length; i++) {
            const element = bids[i].bid;
            if(element>largest){
                largest = element;
            }
            
        }
        return largest;
    };
    var highestBid = getHighest(bids);
    return ( 
        <div>
            <h5 className='font-weight-normal'>{item.item_name} Highest Bid: {highestBid}</h5>
        </div>
     );
};

export default OrderInfo;