import React, {useState} from 'react';
import {useParams} from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_ITEM, QUERY_BIDS } from '../utils/queries';
import { ADD_ORDER } from '../utils/mutations';
import {getHighest} from '../utils/highestBid';

function Item() {
    const [formState, setFormState] = useState({
        bid: ''
    });
    const [addOrder, {error}] = useMutation(ADD_ORDER);
    let {id: itemId} = useParams();
    var item = useQuery(QUERY_ITEM, {
        variables: {id: itemId},
    })
    var bids = useQuery(QUERY_BIDS, {
        variables: {id: itemId}
    })

    const errors = item.error || bids.error;
    const loading = bids.loading || bids.loading;

    var bids = bids.data?.bids || [];
    
    
    
    console.log(bids);
    var item = item.data?.item || {};

    var highestBid = getHighest(bids);
    console.log(highestBid);

    const handleChange = (event) => {
        var { name, value } = event.target;
        setFormState({
          ...formState,
          [name]: value,
        });
      };
      const handleFormSubmit = async (e) => {

        try {
          console.log(item);

          const { data } = await addOrder({
            variables: { ...formState, itemId: item._id, seller: item.ownerId}, 
          });
        } catch (e) {
          
          console.error(e);
        }
      };
    if (loading) {
        return <div>Loading...</div>;
    }
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
                    {bids.length ? (
                    <div className='row'>
                        <div className='col-md-12'>
                            <h4 className='font-weight-normal'>Highest bid: {highestBid} </h4>
                        </div>
                    </div>
                    
                    ):(
                    <div className='row'>
                        <div className='col-md-12'>
                            <h4 className='font-weight-normal'>Asking Price: {item.asking_price}$</h4>
                        </div>
                    </div>
                    )}
                    {item.sold ? (<div className='row'>Item has been sold!</div>):(
                        <div className='row'>
                        <div className='col-md-12'>
                            <form onSubmit={handleFormSubmit}>
                            <input
                            className="form-input"
                            placeholder={formState.bid}
                            name="bid"
                            type="number"
                            id="bid"
                            onChange={handleChange}
                            />
                            <button className="btn d-block w-25" type="submit">
                                Submit
                            </button>
                            </form>
                        </div>
                    </div>)
                    }
                    
                </div>
            </div>
        </div> );
}

export default Item;