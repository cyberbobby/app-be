import { createConnection } from 'typeorm';
import { Users } from './src/users';

const db = async () => {
  try {
    await createConnection({
      type: 'mysql',
      host: 'localhost',
      username: 'root',
      password: '',
      database: 'online_store',
      entities: [Users],
      synchronize: true,
    });
    console.log('Connected to MySql DB');
  } catch (error) {
    console.error(error);
    throw new Error('Unable to connect to MySql DB');
  }
};

db();
