import users from './queries/users';
import userSignUp from './mutations/userSignUp';
import userLogin from './mutations/userLogIn';

export default {
  Query: {
    ...users.Query,
  },
  Mutation: {
    ...userSignUp.Mutation,
    ...userLogin.Mutation,
  },
};
