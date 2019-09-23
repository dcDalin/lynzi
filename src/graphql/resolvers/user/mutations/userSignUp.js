/* eslint-disable no-underscore-dangle */
import { UserInputError } from 'apollo-server-express';
import bcrypt from 'bcryptjs';
import User from '../../../../models/user';
import verificationCode from '../../../../utils/verificationCode';
import sendMessage from '../../../../utils/sms/sendSMS';
import { generateToken } from '../utils';
import userSignUpValidation from './validations/userSignUpValidation';

export default {
  Mutation: {
    async userSignUp(
      _,
      {
        userSignUpInput: {
          username, phoneNumber, password, confirmPassword,
        },
      },
    ) {
      // Validate user input
      const { valid, errors } = userSignUpValidation(
        username,
        phoneNumber,
        password,
        confirmPassword,
      );
      if (!valid) {
        throw new UserInputError('Errors', { errors });
      }

      // Make sure username doesn't exist
      const userUsername = await User.findOne({ username });
      if (userUsername) {
        throw new UserInputError('Username is taken', {
          errors: {
            username: 'This username is taken',
          },
        });
      }

      // Make sure phone number doesn't exist
      const userPhone = await User.findOne({ phoneNumber });
      if (userPhone) {
        throw new UserInputError('Phone number exists', {
          errors: {
            phoneNumber: 'Phone number already exists',
          },
        });
      }

      // Hash the password
      const hashedPassword = await bcrypt.hash(password, 12);

      const message = `Hello ${username}, Your verification code is: ${verificationCode}`;

      // Remove zero -> first digit in 0722......
      const slicePhoneNumber = phoneNumber.slice(1);

      const sendVerificationCode = await sendMessage([`+254${slicePhoneNumber}`], message);

      if (!sendVerificationCode.SMSMessageData) {
        throw new UserInputError(sendVerificationCode, {
          errors: {
            general: 'Could not send verification code. Please try again later',
          },
        });
      }

      const newUser = new User({
        username,
        phoneNumber,
        password: hashedPassword,
        verification: {
          verificationCode,
        },
      });

      // Save to DB
      const res = await newUser.save();

      // Generate token
      const token = generateToken(res);

      return {
        ...res._doc,
        id: res._id,
        token,
      };
    },
  },
};
