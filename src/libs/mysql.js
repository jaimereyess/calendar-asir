import mysql from 'mysql2/promise';
import fs from 'fs';

const caCert = fs.readFileSync('/cacert.pem');
const clientCert = fs.readFileSync('/cacert.pem');
const clientKey = fs.readFileSync('/cacert.pem');

const CONFIG = {
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAME,
  ssl: {
    ca: caCert,
    cert: clientCert,
    key: clientKey
  }
};

export const conn = mysql.createConnection(CONFIG);
