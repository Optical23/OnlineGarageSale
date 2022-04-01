import React from 'react';
import { useQuery, useMutation } from '@apollo/client';
import { QUERY_STORE } from '../utils/queries';
import {Link} from 'react-router-dom';
import OrderInfo from '../components/OrderInfo';
import BuyerInfo from '../components/BuyerInfo';
import { ITEM_SOLD } from '../utils/mutations';
function OrderList({store}) {
    const {loading, data} = useQuery(QUERY_STORE, {
        variables: {id: store},
    });
    const [itemSold, {error}] = useMutation(ITEM_SOLD);
    const storeInfo = data?.store || {};
    if(storeInfo.items){
        var itemsInfo = data?.store.items || [];
    }
    const sellItem = async (event) => {
        
        const item = event.target.value;
        try{
            const { data } = await itemSold({
                variables: { id: item}, 
              });
        }catch(e) {
            console.error(e);
        }
    }
    return ( 
    <>
        {itemsInfo &&
                itemsInfo.map(item =>(
                <>
                    {item ? (
                    <div key={item._id} className='row border'>
                        {item.sold ? (
                        <>
                            <Link to={`/item/${item._id}`} className='thumbnail font-weight-normal text-dark text-decoration-none'>
                                <h5 className='font-weight-normal'>{item.item_name} |Sold| contact the buyer to make the exchange!</h5>
                                <BuyerInfo item={item} />
                            </Link>
                        </>
                        ):(
                        <div className='w-100'>
                        <Link to={`/item/${item._id}`} className='thumbnail font-weight-normal text-dark text-decoration-none'>
                            <OrderInfo item={item} ></OrderInfo>
                        </Link>
                        <button value={item._id} onClick={sellItem}>Accept</button>
                        </div>)}
                    </div>):(
                    <div>You don't have any items in your store</div>
                    )}
                </>
                ))
            }  
    </>
     );
}

export default OrderList;