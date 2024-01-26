const Sequelize = require('sequelize')
const dbConfig = require('./database')

const Cliente = require('../models/cliente')
const connection = new Sequelize(dbConfig)

Cliente.init(connection)

module.exports = connection
