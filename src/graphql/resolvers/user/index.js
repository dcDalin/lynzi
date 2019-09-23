import users from './queries/users';
import userSignUp from './mutations/userSignUp';

export default {
  Query: {
    ...users.Query,
  },
  Mutation: {
    ...userSignUp.Mutation,
  },
};
