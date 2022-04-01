import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query($id: ID!){
  user(_id: $id) {
    _id
    email
    full_name
  }
}
`;

export const QUERY_STORES = gql`
{
  stores {
    _id
    store_name
    owner
    state
    city
    public
    itemAmount
    description
    items {
      _id
    }
  }
}
`;

export const QUERY_STORE = gql`
query($id: ID!) {
  store(_id: $id) {
    _id
    store_name
    owner
    description
    city
    state
    public
    itemAmount
    items {
      _id
      item_name
      description
      asking_price
      condition
      image
      sold
    }
  }
}
`;

export const QUERY_SELF = gql`
{
  me {
    _id
    full_name
    email
    state
    city
    store {
      _id
    }
  }
}
`;

export const QUERY_ITEM = gql`
query($id: ID!) {
  item(_id: $id) {
    item_name
    _id
    image
    condition
    asking_price
    description
    sold
    ownerId
    storeId {
      _id
    }
  }
}
`;

export const QUERY_BIDS = gql`
query($id: ID!) {
  bids(_id: $id) {
    _id
    bid
    seller {
      _id
    }
    buyer {
      _id
    }
    itemId {
      _id
    }
  }
}
`;

export const QUERY_ORDER = gql`
query($id: ID!, $bidAmount: String!) {
  order(_id: $id, bidAmount: $bidAmount) {
    seller {
      _id
    }
    buyer {
      _id
      email
    }
    bid
  }
}
`;