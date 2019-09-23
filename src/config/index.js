const config = {
  production: {
    APP_PORT: process.env.PORT,
    APP_SECRET: process.env.APP_SECRET,
    MONGO_URL: process.env.MONGO_URL,
    PLAYGROUND: false,
    AT_USERNAME: process.env.AT_USERNAME,
    AT_API_KEY: process.env.AT_API_KEY,
  },
  development: {
    APP_PORT: process.env.APP_PORT,
    APP_SECRET: 'somesecret',
    MONGO_URL: 'mongodb://localhost/lynzi',
    PLAYGROUND: true,
    AT_USERNAME: process.env.AT_USERNAME,
    AT_API_KEY: process.env.AT_API_KEY,
  },
  testing: {
    APP_PORT: process.env.APP_PORT,
    APP_SECRET: 'somesecret',
    MONGO_URL: 'mongodb://localhost/lynzi-test',
    PLAYGROUND: true,
    AT_USERNAME: process.env.AT_USERNAME,
    AT_API_KEY: process.env.AT_API_KEY,
  },
  default: {
    APP_PORT: process.env.APP_PORT,
    APP_SECRET: 'somesecret',
    MONGO_URL: 'mongodb://localhost/lynzi',
    PLAYGROUND: true,
    AT_USERNAME: process.env.AT_USERNAME,
    AT_API_KEY: process.env.AT_API_KEY,
  },
};

exports.get = function get(env) {
  return config[env] || config.default;
};
