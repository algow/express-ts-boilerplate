import express from 'express';
import cors from 'cors';
import {server} from './providers/configs';
import database from './providers/database';
import router from './providers/router';

const run = async () => {
  const app = express();
  const port = process.env.PORT || server.port;

  await database();
  
  app.use(cors());
  app.use(express.json());
  app.use(express.urlencoded({ extended: true }));

  router(app);

  app.listen(port, () => console.log(`Using port ${port}`));
}

run();