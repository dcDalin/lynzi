/* eslint-disable no-underscore-dangle */
import { UserInputError } from 'apollo-server-express';
import bcrypt from 'bcryptjs';
import User from '../../../../models/user';
import userLoginValidation from './validations/userLoginValidation';
import { generateToken } from '../utils';

export default {
  Mutation: {
    async userLogin(_, { phoneNumber, password }) {
      // Validate user input
      const { valid, errors } = userLoginValidation(phoneNumber, password);
      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }

      const user = await User.findOne({ phoneNumber });

      if (!user) {
        errors.general = 'User not found';
        throw new UserInputError('User not found', { errors });
      }

      const match = await bcrypt.compare(password, user.password);

      if (!match) {
        errors.general = 'Wrong credentials';
        throw new UserInputError('Wrong credentials', { errors });
      }

      const token = generateToken(user);

      return {
        ...user._doc,
        id: user._id,
        token,
      };
    },
  },
};
