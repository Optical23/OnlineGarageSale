import React from 'react';
import StoreThumbnail from '../components/StoreThumbnail';
import {Link} from 'react-router-dom';

const StoreCard = ({stores}) => {
    if(!stores.length) {
        return <h6>No Stores here</h6>
    }
    return ( 
        <>
            {stores &&
                stores.map(store =>(
                <>
                    {store.items.length ? (
                    <div key={store._id} className='col-lg-3 col-md-5 col-xs-6 thumb border p-4 m-1'>
                        <div className='w-100'>
                        <Link to={`/store/${store._id}`} className='thumbnail font-weight-normal text-dark text-decoration-none'>
                            <StoreThumbnail
                            className='img-fluid'
                            itemId={store.items[0]._id} 
                            />
                        <h3>{store.store_name}</h3>
                        <h5>{store.description}</h5>
                        <h5>Items in Store: {store.itemAmount}</h5>
                        </Link>
                        </div>
                    </div>):(
                    <></>
                    )}
                </>
                ))
            }    
        
        </>
    );
}

export default StoreCard;