import {gql} from '@apollo/client';

export const LOGIN = gql`
    mutation ($email: String!, $password: String!) {
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
mutation ($fullName: String!, $email: String!, $password: String!, $city: String!, $state: String!) {
  addUser(full_name: $fullName, email: $email, password: $password, city: $city, state: $state) {
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
`;

export const ADD_STORE = gql`
mutation ($storeName: String!, $description: String, $public: Boolean, $cityName: String!, $stateName: String!) {
    addStore(store_name: $storeName, description: $description, public: $public, city: $cityName, state: $stateName) {
      store_name
      description
      city
      state
      public
      owner
    }
  }
`;

export const ADD_ITEM = gql`
mutation ($itemName: String!, $description: String, $condition: String!, $askingPrice: String!, $ownerId: String!, $storeId: String!, $image: String!) {
  addItem(item_name: $itemName, description: $description, condition: $condition, asking_price: $askingPrice, ownerId: $ownerId, storeId: $storeId, image: $image) {
    item_name
    description
    condition
    asking_price
    storeId {
      _id
    }
    sold
  }
}
`;

export const ADD_ORDER = gql`
mutation ($itemId: String!, $seller: String!, $bid: String!){
  addOrder(itemId: $itemId, seller: $seller, bid: $bid) {
    itemId {
      _id
    }
    buyer {
      _id
    }
    seller {
      _id
    }
    bid
  }
}
`;

export const DELETE_ITEM = gql`
mutation ($id: ID!){
  deleteItem(_id: $id) {
    _id
  }
}
`;

export const ITEM_SOLD = gql`
mutation ($id: ID!) {
  itemSold(_id: $id) {
    _id
    item_name
  }
}
`;