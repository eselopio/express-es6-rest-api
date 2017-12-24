import Sequelize from 'sequelize';
import config from '../config/config.dev';

const server = process.env.SERVER || config.serverDB;
const database = process.env.DB || config.db;
const username = process.env.DATABASE_MYSQL_USERNAME || config.user;
const password = process.env.DATABASE_MYSQL_PASSWORD || config.password;
const dialect = process.env.DIALECT || config.dialect;

let db = new Sequelize(database, username, password, {
  host: server,
  dialect: dialect,
  logging: false
});

db.Sequelize = Sequelize;

module.exports = db;
