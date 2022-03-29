import {gql} from '@apollo/client';

export const LOGIN = gql`
    mutation login($email: String!, $password: String!) {
        login(email: $email, password: $password) {
        token
        user {
            _id
            full_name
            email
            city
            state
        }
        }
    }
`

export const ADD_USER = gql`
mutation($fullName: String!, $email: String!, $password: String!, $city: String!, $state: String!) {
    addUser(full_name: $fullName, email: $email, password: $password, city: $city, state: $state) {
      token
      user {
        _id
        full_name
        email
        city
        state
        store {
          _id
        }
        orders {
          _id
        }
      }
    }
  }
`;

export const ADD_STORE = gql`
mutation($storeName: String!, $description: String, $public: Boolean, $cityName: String!, $stateName: String!) {
    addStore(store_name: $storeName, description: $description, public: $public, city: $cityName, state: $stateName) {
      store_name
      description
      city
      state
      public
      owner
      items {
        _id
      }
    }
  }
`;

export const ADD_ITEM = gql`
mutation($itemName: String!, $condition: String!, $askingPrice: String!, $storeId: String!, $description: String, $image: String!) {
  addItem(item_name: $itemName, condition: $condition, asking_price: $askingPrice, storeId: $storeId , description: $description, image: $image) {
    item_name
    description
    condition
    asking_price
    image
    storeId {
      _id
    }
    sold
  }
}
`;