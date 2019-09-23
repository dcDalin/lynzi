import { gql } from 'apollo-server-express';

export default gql`
  extend type Query {
    users: [User]
  }

  extend type Mutation {
    userSignUp(userSignUpInput: UserSignUpInput): User!
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

  input UserSignUpInput {
    username: String!
    phoneNumber: String!
    password: String!
    confirmPassword: String!
  }
`;
