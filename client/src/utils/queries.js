import { gql } from '@apollo/client';

export const QUERY_USER = gql`
query user($username: String!) {
  user(username: $username) {
    _id
    username
    email
    friendCount
    friends {
      _id
      username
    }
    thoughts {
      _id
      thoughtText
      createdAt
      reactionCount
    }
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
    items {
      _id
      item_name
      description
      asking_price
      condition
      sold
    }
  }
}
`

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
`