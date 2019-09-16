/* eslint-disable no-console */

import express from 'express';
import bodyParser from 'body-parser';
import constants from './config/constants';
import './config/db';

const app = express();

app.disable('x-powered-by');

const { PORT } = constants;

app.use(bodyParser.json());

app.listen(PORT, (err) => {
  if (err) {
    console.error(err);
  } else {
    console.log(`App listening on port ${PORT}`);
  }
});
