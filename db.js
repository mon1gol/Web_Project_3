const { Client } = require('pg')

const client = new Client({
  host: 'localhost',
  port: 5432,
  database: 'websockettest',
  user: 'postgres',
  password: '121212',
})

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
})

module.exports = {
  query: (string, payload) => client.query(string, payload)
}