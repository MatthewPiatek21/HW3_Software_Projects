const { Pool, Client } = require('pg')
const connectionString = 'postgres://postgres:Matt1337@db-hw3.cjm6qucmecw2.us-east-2.rds.amazonaws.com'
const pool = new Pool({
  connectionString,
})

const client = new Client ({
  connectionString,
})
client.query('SELECT VERSION();', (err, res) => {   client.end();   version = res.rows; });

module.exports = pool;
