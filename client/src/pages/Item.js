import React from 'react';
import {useParams} from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { QUERY_ITEM } from '../utils/queries';
function Item() {
    let {id: itemId} = useParams();
    const {loading, data} = useQuery(QUERY_ITEM, {
        variables: {id: itemId},
    })
    const item = data?.item || {};
    if (loading) {
        return <div>Loading...</div>;
    }
    console.log(item);
    console.log(itemId);
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                <img className='img-fluid w-100'
                    src={item.image}></img>
                </div>
                <div className='col-md-6 border'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1>{item.item_name}</h1>
                        </div>    
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2 className='font-weight-normal'>Description:</h2>
                            <h3 className='font-weight-normal'> {item.description}</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h4 className='font-weight-normal'>Condition: {item.condition}</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h4 className='font-weight-normal'>Asking Price: {item.asking_price}$</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <input
                            className="form-input"
                            placeholder={item.asking_price}
                            name="password"
                            type="password"
                            id="password"
                            />
                            <button className="btn d-block w-25" type="submit">
                                Submit
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div> );
}

export default Item;