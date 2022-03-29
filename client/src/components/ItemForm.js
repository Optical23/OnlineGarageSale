import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_ITEM } from '../utils/mutations';

const ItemForm = ({store}) => {
  const [formState, setFormState] = useState({
    ItemName: '',
    description: '',
    condition: '',
    askingPrice: '',
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
    event.preventDefault();

    try {
      const { data } = await addItem({
        variables: { ...formState, storeId: store},
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
      <div className="col-12 col-md-6">
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
                type="condition"
                id="condition"
                value={formState.condition}
                onChange={handleChange}
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
  );
};

export default ItemForm;