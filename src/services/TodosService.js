import Todo from '../models/Todo';

const service = {

  listAll: function() {

    return Todo.findAll();
  },

  find: function(params) {

    return Todo.findOne({
      where: params
    });
  },

  create: function(params) {

    return Todo.create(params);
  },

  update: function(params, sets) {

    return Todo.update(sets,{
      where: params
    });
  },

  destroy: function(params){

    return Todo.destroy({
      where: params
    });
  }
};

export default service;
