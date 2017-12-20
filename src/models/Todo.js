const db = require('../../config/db');

const Todo = db.define('todo', {
  id: {
    type: db.Sequelize.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  text: {
    type: db.Sequelize.STRING,
  }
}, {
  timestamps: false
});

module.exports = Todo;