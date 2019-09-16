import mongoose from 'mongoose';

import constants from './constants';

mongoose.Promise = global.Promise;

mongoose.set('debug', true);

try {
  mongoose.connect(constants.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (err) {
  mongoose.createConnection(constants.DB_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
}

mongoose.connection
  // eslint-disable-next-line no-console
  .once('open', () => console.log('MongoDB running'))
  .on('error', (e) => {
    throw e;
  });
