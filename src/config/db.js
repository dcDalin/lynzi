import mongoose from 'mongoose';
import config from './index';

const ENV_VAR = config.get(process.env.NODE_ENV);

const { MONGO_URL } = ENV_VAR;

mongoose.Promise = global.Promise;

mongoose.set('debug', true);

try {
  mongoose.connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  });
} catch (err) {
  mongoose.createConnection(MONGO_URL, {
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
