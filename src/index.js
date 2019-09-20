/* eslint-disable no-console */

import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import config from './config';
import './config/db';
import typeDefs from './graphql/typeDefs';
import resolvers from './graphql/resolvers';
import mocks from './mocks';

const ENV_VAR = config.get(process.env.NODE_ENV);

const { APP_PORT, PLAYGROUND } = ENV_VAR;

const app = express();

app.disable('x-powered-by');

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: ({ req }) => ({ req }),
  playground: PLAYGROUND,
});

server.applyMiddleware({ app });

mocks().then(() => {
  app.listen(APP_PORT, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`🚀 Server ready at http://localhost:${APP_PORT}${server.graphqlPath}`);
    }
  });
});
