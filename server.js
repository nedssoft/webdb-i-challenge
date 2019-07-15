const express = require('express');
const { handleError } = require('./helpers')
const routes = require('./routes')
const db = require('./data/dbConfig.js');

const server = express();

server.use(express.json());
server.get('/', (req, res) => {
  return  res.send('welcome')
})
server.use('/api', routes)

server.use((err, req, res, next) => {
  handleError(err, res);
});
module.exports = server;