import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ITEM } from '../utils/mutations';
import FileBase64 from 'react-file-base64';

const ItemForm = ({store}) => {
  const [formState, setFormState] = useState({
    itemName: '',
    description: '',
    askingPrice: '',
    condition:'',
    image: ''
  });
  const [addItem, { error }] = useMutation(ADD_ITEM);

  // update state based on form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    
    setFormState({
      ...formState,
      [name]: value,
    });
  };
  // submit form
  const handleFormSubmit = async (event) => {
    try {
        
      const { data } = await addItem({
        variables: { ...formState, storeId: store },
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
                placeholder="Your askingPrice"
                name="askingPrice"
                type="askingPrice"
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