import jwt from 'jsonwebtoken';
import config from '../../../config';

const ENV_VAR = config.get(process.env.NODE_ENV);

const { APP_SECRET } = ENV_VAR;

const generateToken = (user) => jwt.sign(
  {
    id: user.id,
    username: user.username,
    phoneNumber: user.phoneNumber,
    isVerified: user.verification.isVerified,
  },
  APP_SECRET,
  { expiresIn: '1h' },
);

// eslint-disable-next-line import/prefer-default-export
export { generateToken };
