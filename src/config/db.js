const Sequelize = require('sequelize');
const config = require('../config.json');

const server = process.env.SERVER || config.database.server;
const database = process.env.DB || config.database.db;
const username = process.env.DATABASE_MYSQL_USERNAME || config.database.user;
const password = process.env.DATABASE_MYSQL_PASSWORD || config.database.password;
const dialect = process.env.DIALECT || config.database.dialect;

let db = new Sequelize(database, username, password, {
  host: server,
  dialect: dialect,
  logging: false
});

db.Sequelize = Sequelize;

module.exports = db;
