const config = {
  production: {
    APP_PORT: process.env.PORT,
    APP_SECRET: process.env.APP_SECRET,
    MONGO_URL: process.env.MONGO_URL,
    PLAYGROUND: false,
  },
  development: {
    APP_PORT: process.env.APP_PORT,
    APP_SECRET: 'somesecret',
    MONGO_URL: 'mongodb://localhost/lynzi',
    PLAYGROUND: true,
  },
  testing: {
    APP_PORT: process.env.APP_PORT,
    APP_SECRET: 'somesecret',
    MONGO_URL: 'mongodb://localhost/lynzi-test',
    PLAYGROUND: true,
  },
  default: {
    APP_PORT: process.env.APP_PORT,
    APP_SECRET: 'somesecret',
    MONGO_URL: 'mongodb://localhost/lynzi',
    PLAYGROUND: true,
  },
};

exports.get = function get(env) {
  return config[env] || config.default;
};
