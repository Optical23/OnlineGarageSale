import React from 'react';
import StoreThumbnail from '../components/StoreThumbnail';

const StoreCard = ({stores}) => {
    if(!stores.length) {
        return <h6>No Stores here</h6>
    }
    return ( 
        <>
        
            {stores &&
                stores.map(store =>(
                <div key={store._id} className='col-lg-3 col-md-4 col-xs-6 thumb'>
                    <a href='/store' className='thumbnail'>
                        {store.items[0] ? (
                            <StoreThumbnail
                            itemId={store.items[0]._id} 
                        />
                        ):(<></>)}
                        
                    <h3>{store.store_name}</h3>
                    </a>
                </div>
            ))
            }    
        
        </>
    );
}

export default StoreCard;