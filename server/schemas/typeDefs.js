const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        full_name: String
        email: String
        city: String
        state: String
        store: Store
        orders: [Order]
    }

    type Store {
        _id: ID
        store_name: String
        owner: String
        description: String
        city: String
        state: String
        public: Boolean
        items: [Item]
    }

    type Order {
        _id: ID
        item_name: String
        buyer: User
        seller: User
        created_at: String
        bid: Int
        accepted: Boolean
    }

    type Item {
        _id: ID
        item_name: String
        description: String
        condition: String
        asking_price: String
        storeId: Store
        sold: Boolean
    }

    type Auth {
        token: ID!
        user: User
    }

    type Query {
        me: User
        users: [User]
        user(_id: ID!): User
        store(_id: ID!): Store
        stores: [Store]

    } 

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(full_name: String!, email: String!, password: String!, city: String!, state: String!): Auth
        addStore(store_name: String!, description: String, city: String!, state: String!, public: Boolean): Store
        addItem(item_name: String!, description: String, condition: String!, asking_price: String!): Item
    }
`;

module.exports = typeDefs;
   