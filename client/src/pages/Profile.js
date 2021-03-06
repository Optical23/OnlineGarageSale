import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SELF } from '../utils/queries';
import ProfileHead from '../components/ProfileHead';
import StoreController from '../components/StoreController';
import StoreForm from '../components/StoreForm';
import OrderList from '../components/OrderList';

function Profile() {
    const {loading, data} = useQuery(QUERY_SELF);
    const me = data?.me || {};
    console.log(me);
    return ( 
    <div className='container'>
        <div className='row'>
        <div className='col-md-9'>
            {loading ? (
                <div>loading</div>
            ):(
                <>
                <ProfileHead name={me.full_name}  email={me.email} />
                {me.store ? (
                    <div className='border'>
                        <StoreController storeId={me.store._id}/>
                    </div>
                ):(
                    <div className='border'>
                    <h4>Create a store</h4>
                    <StoreForm city={me.city} state={me.state}/>
                    </div>
                )}
                
                </>
            )}
            
        </div>
        {loading ? (
            <div>loading</div>
        ): (
            <div className='col-md-3 border'>
                <h2>Orders:</h2>
                {me.store?(<><OrderList store={me.store._id}/></>):(<></>)}
                
            </div>
        )}
        
        </div>
    </div>
     );
}

export default Profile;