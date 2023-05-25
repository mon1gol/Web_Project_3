const pgp = require('pg-promise')();
const db = pgp('postgres://postgres:root@localhost:5432/project_3_login');

const Pool = require('pg').Pool
const pool = new Pool({
  user: "postgres",
  password: 'root',
  host: "localhost",
  port: 5432,
  database: "project_3_login"
})

module.exports = pool
module.exports = {
  db,
  pgp
}