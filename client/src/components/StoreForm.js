import React, { useState } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_STORE } from '../utils/mutations';

const StoreForm = ({city, state}) => {
  const [formState, setFormState] = useState({
    storeName: '',
    description: ''
  });
  const [addStore, { error }] = useMutation(ADD_STORE);

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
      const { data } = await addStore({
        variables: { ...formState, cityName: city, stateName: state },
      });
    } catch (e) {
      console.error(e);
    }
  };

  return (
    <main className="flex-row justify-center mb-4">
      <div className="col-12 col-md-6">
        <div className="card">
          <h4 className="card-header">Fill in store info</h4>
          <div className="card-body">
            <form onSubmit={handleFormSubmit}>
              <input
                className="form-input"
                placeholder="Your storeName"
                name="storeName"
                type="storeName"
                id="storeName"
                value={formState.storeName}
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
              <button className="btn d-block w-100" type="submit">
                Submit
              </button>
            </form>

            {error && <div>StoreForm failed</div>}
          </div>
        </div>
      </div>
    </main>
  );
};

export default StoreForm;