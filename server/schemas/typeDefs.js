const { gql } = require('apollo-server-express');

const typeDefs = gql`
    type User {
        _id: ID
        full_name: String
        email: String
        city
    }

    type Query {
        
    }
`