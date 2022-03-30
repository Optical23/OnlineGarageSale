import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_STORES } from '../utils/queries';
import StoreCard from '../components/StoreCard';
function Search() {
    const {loading, data } = useQuery(QUERY_STORES);
    const stores = data?.stores || [];

    return ( 
    <div className='container'>
        <div className='row'>
            <div className='row d-flex justify-content-between '>
                {loading ? (
                    <div>Searching for stores </div>
                ) : (
                    <StoreCard
                        stores={stores}
                    />
                )}
            </div>    
        </div>
    </div> );
}

export default Search;