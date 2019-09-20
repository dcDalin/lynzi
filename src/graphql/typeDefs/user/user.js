import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    users: [User]
  }

  type Verification {
    isVerified: Boolean!
  }

  type User {
    id: ID!
    username: String!
    phoneNumber: String!
    token: String
    verification: Verification
  }
`;
