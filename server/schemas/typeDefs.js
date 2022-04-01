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
        itemAmount: Int
    }

    type Order {
        _id: ID
        itemId: Item
        buyer: User
        seller: User
        bid: Int
        accepted: Boolean
    }

    type Item {
        _id: ID
        item_name: String
        description: String
        condition: String
        asking_price: String
        ownerId: String
        image: String
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
        item(_id: ID!): Item
        bids(_id: ID!): [Order]
        order(_id: ID!, bidAmount: String!): Order
    } 

    type Mutation {
        login(email: String!, password: String!): Auth
        addUser(full_name: String!, email: String!, password: String!, city: String!, state: String!): Auth
        addStore(store_name: String!, description: String, city: String!, state: String!, public: Boolean): Store
        addItem(item_name: String!, ownerId: String!, description: String, condition: String!, asking_price: String!, storeId: String!, image: String!): Item
        deleteItems: [Item]
        deleteStores: Store
        clearStoreIds: User
        addOrder(itemId: String!, seller: String!, bid: String!): Order
        itemSold(_id: ID!): Item
    }
`;

module.exports = typeDefs;
   