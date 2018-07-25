const env = process.env.NODE_env
const config = require('./knexfile.js')[environment]
const knex = require('knex')(knexConfig)

module.exports = knex
