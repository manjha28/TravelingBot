const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'travelingbot',
  password: 'manish',
  port: 5433,
})

module.exports = pool;