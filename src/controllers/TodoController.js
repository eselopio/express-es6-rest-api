import Todo from '../services/TodosService';
import TodoMongo from '../models/TodoMongo';

const controller = {};

controller.getAll = async(req, res) => {
    try {
        let todo = await Todo.listAll();
        res.send(todo);
    } catch (err) {
        res.send("got Error in listAll");
    }
}

controller.getAllTodo = async(req, res) => {
    try {
        let todo = await TodoMongo.getAll();
        res.send(todo);
    } catch (err) {
        res.send("got Error in getAll");
    }
}

export default controller;