import db from '../db/connectMysql';

const Todo = db.define('todos', {
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

export default Todo;