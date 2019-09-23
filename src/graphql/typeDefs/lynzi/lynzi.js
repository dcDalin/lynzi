import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    getLynzi(id: ID!): Lynzi
    getLynzis: [Lynzi]
  }

  extend type Mutation {
    createLynzi(lynzi: String!): Lynzi
    updateLynzi(id: ID!, lynzi: String): Lynzi
    deleteLynzi(id: ID!): Boolean
  }

  type Lynzi {
    id: ID!
    lynzi: String!
  }
`;
