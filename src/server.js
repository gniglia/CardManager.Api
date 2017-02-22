import app from './config/express';
import config from './config/env';

import mongoose from 'mongoose';
import Promise from 'bluebird';

Promise.promisifyAll(mongoose);


mongoose.connect(config.default.db);
mongoose.connection.on('error', (err) => {
  //throw new Error(`unable to connect to database: ${config.default.db}`);
  console.log(`unable to connect to database: ${err}`);
});

const port = process.env.PORT || config.default.port;
app.listen(port, () => {
  console.log(`listening on port: ${port}...`);
});
