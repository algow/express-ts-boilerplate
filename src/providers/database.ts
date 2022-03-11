import mongoose from 'mongoose';
import { db } from './configs';

async function database() {
  const connection = `mongodb://${db.host}:${db.port}/${db.name}`;

  try {
    await mongoose.connect(connection);
    console.log('MongoDB connected to ' + connection);
  } catch (error) {
    console.log('MongoDB failed to connect' + error);
  }
}


export default database;


