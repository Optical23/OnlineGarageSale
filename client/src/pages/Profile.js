import React from 'react';
import { useQuery } from '@apollo/client';
import { QUERY_SELF } from '../utils/queries';
import Auth from '../utils/auth';
import ProfileHead from '../components/ProfileHead';
import {Navigate} from 'react-router-dom';

function Profile() {
    const {loading, data} = useQuery(QUERY_SELF);
    const me = data?.me || {};
    if(!Auth.loggedIn()){
        return <Navigate replace to='/'/>;
    }
    return ( 
    <div className='container'>
        <div className='col-md-6'>
            {loading ? (
                <div>loading</div>
            ):(
                <ProfileHead self={me} />
            )}
            
        </div>
    </div>
     );
}

export default Profile;