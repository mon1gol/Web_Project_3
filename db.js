const Pool = require('pg').Pool
const pool = new Pool({
  user: "postgres",
  password: 'root',
  host: "localhost",
  port: 5432,
  database: "project_3_login"
})

module.exports = pool