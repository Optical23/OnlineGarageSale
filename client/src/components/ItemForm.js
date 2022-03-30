import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ITEM } from '../utils/mutations';
import FileBase64 from 'react-file-base64';

const ItemForm = ({store}) => {
  const [formState, setFormState] = useState({
    itemName: '',
    description: '',
    askingPrice: 0,
    condition:'',
    image: ''
  });
  const [addItem, { error }] = useMutation(ADD_ITEM);
  const addZeroes = (num) => {
    // Convert input string to a number and store as a variable.
    var value = Number(num);      
    // Split the input string into two arrays containing integers/decimals
        var res = num.split(".");     
    // If there is no decimal point or only one decimal place found.
        if(res.length == 1 || res[1].length < 3) { 
    // Set the number to two decimal places
            value = value.toFixed(2);
        }
    // Return updated or original number.
    return value;
  }
  // update state based on form input changes
  const handleChange = (event) => {
    var { name, value } = event.target;
    if(name == "askingPrice"){
      value = `${addZeroes(value)}`;
      
    }
    
    setFormState({
      ...formState,
      [name]: value,
    });
  };

  // submit form
  const handleFormSubmit = async (event) => {
    event.preventDefault();
    try {
      console.log(store);
      console.log(store.owner);
      const { data } = await addItem({
        variables: { ...formState, storeId: store._id, ownerId: store.owner}, 
      });
    } catch (e) {
      
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-12">
        <div className="card">
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Your itemName"
                name="itemName"
                type="itemName"
                id="itemName"
                value={formState.itemName}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Your description"
                name="description"
                type="description"
                id="description"
                value={formState.description}
                onChange={handleChange}
              />
              <input
                className="form-input"
                placeholder="Your condition"
                name="condition"
                type="text"
                id="condition"
                value={formState.condition}
                onChange={handleChange}
              />
                <FileBase64
                    multiple={ false }
                    name="image"
                    id="image"
                    value={formState.image}
                    onChange={handleChange}
                    onDone={({base64})=>setFormState({...formState, image: base64}) }
                />
              <input
                className="form-input"
                placeholder="15"
                name="askingPrice"
                type="number"
                id="askingPrice"
                value={formState.askingPrice}
                onChange={handleChange}
                
              />
              <button className="btn d-block w-100" type="submit">
                Submit
              </button>
            </form>

            {error && <div>ItemForm failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default ItemForm;