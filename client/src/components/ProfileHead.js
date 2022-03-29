import React from 'react';

const ProfileHead = ({name, email}) => {
    
    return ( <>
    <div className='row'>
        <h1>{name}</h1>
    </div>
    <div className='row'>
        <h5>Email:{email}</h5>
    </div>
    <div className='row'>
        <h3>Your Store:</h3>
    </div>
    </>);
}

export default ProfileHead;