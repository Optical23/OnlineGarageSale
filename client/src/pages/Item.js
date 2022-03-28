import React from 'react';
import imgTest from './logo512.png';
function Item() {
    const condition = "This is a variable test but can fill condition: bad"
    const asking_price = 12.42
    return ( 
        <div className='container'>
            <div className='row'>
                <div className='col-md-6'>
                <img className='img-fluid'
                    src={imgTest}></img>
                </div>
                <div className='col-md-6'>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h1>This is the items Name</h1>
                        </div>    
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h2 className='font-weight-normal'>Description:</h2>
                            <h3 className='font-weight-normal'>This is a filler description of what is to come and be filled later with data</h3>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h4 className='font-weight-normal'>Condition: {condition}</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <h4 className='font-weight-normal'>Asking Price: {asking_price}$</h4>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-12'>
                            <input
                            className="form-input"
                            placeholder={asking_price}
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