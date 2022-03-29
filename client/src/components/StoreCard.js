import React from 'react';

const StoreCard = ({stores}) => {
    if(!stores.length) {
        return <h6>No Stores here</h6>
    }
    return ( 
        <div className='col-lg-3 col-md-4 col-xs-6 thumb'>
            <a href='/store' className='thumbnail'>
                    <img className='img-thumbnail'
                    src=''
                    ></img>
                <h1>{stores[0].store_name}</h1>
            </a>    
        </div>
    );
}

export default StoreCard;