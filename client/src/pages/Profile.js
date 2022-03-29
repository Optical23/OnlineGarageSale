import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SELF } from '../utils/queries';
import ProfileHead from '../components/ProfileHead';
import StoreController from '../components/StoreController';
import StoreForm from '../components/StoreForm';

function Profile() {
    const {loading, data} = useQuery(QUERY_SELF);
    const me = data?.me || {};
    return ( 
    <div className='container'>
        <div className='col-md-9'>
            {loading ? (
                <div>loading</div>
            ):(
                <>
                <ProfileHead name={me.full_name}  email={me.email} />
                {me.store ? (
                    <StoreController storeId={me.store._id}/>
                ):(
                    <>
                    <h4>Create a store</h4>
                    <StoreForm city={me.city} state={me.state}/>
                    </>
                )}
                
                </>
            )}
            
        </div>
    </div>
     );
}

export default Profile;