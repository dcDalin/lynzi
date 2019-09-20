import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    getLynzis: [Lynzi]
  }

  type Lynzi {
    id: ID!
    lynzi: String!
  }
`;
