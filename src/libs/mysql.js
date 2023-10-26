const mysql = require('mysql2');
import fs from 'fs';

const caCert = fs.readFileSync('/cacert.pem');
const clientCert = fs.readFileSync('/cacert.pem');
const clientKey = fs.readFileSync('/cacert.pem');

export const conn = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  ssl: {
    ca: caCert,
    cert: clientCert,
    key: clientKey
  }
});

async function connectToDatabase() {
  try {
    await conn.connect();
    console.log('Connected');
  } catch (error) {
    console.error('Error connecting to MySQL database:', error);
  }
}

export default connectToDatabase;
