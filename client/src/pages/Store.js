import React from 'react';
import {useParams} from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_STORE } from '../utils/queries';
import {Link} from 'react-router-dom';

function Store() {
    let {id: storeId} = useParams();
    const {loading, data} = useQuery(QUERY_STORE, {
        variables: {id: storeId}
    });

    const store = data?.store || {};
    console.log(store);
    var itemsInfo = data?.store.items || [];

    if (loading) {
        return <div>Loading...</div>;
    }
    return ( 
    <div className='container'>
        <div className='row'>
            <div className='row d-flex justify-content-between'>
                {itemsInfo && (
                    itemsInfo.map(item => (
                        <div key={item._id} className='col-lg-3 col-md-5 col-xs-6 thumb border p-4 m-1'>

                        <Link to={`/item/${item._id}`} className='thumbnail font-weight-normal text-dark text-decoration-none'>
                            <img
                            className='img-fluid'
                            src={item.image} 
                            />
                        <h3>{item.item_name}</h3>
                        <h5>{item.description}</h5>
                        <h5>condition: {item.condition}</h5>
                        </Link>
                    </div>
                    ))
                )}
                
            </div>
        </div>
    </div> );
}

export default Store;