import mongoose from 'mongoose';

const TodoSchema = mongoose.Schema({
    id: {type: String, required: true, unique: true, index: true},
    text: {type: String, required: true, unique: true, index: true}
}, {collection : 'Todo'});

let TodoModel = mongoose.model('Todo', TodoSchema);

TodoModel.getAll = () => {
    return TodoModel.find({});
}

TodoModel.addTodo = (todoToAdd) => {
    return todoToAdd.save();
}

TodoModel.removeTodo = (todoName) => {
    return TodoModel.remove({name: todoName    });
}

export default TodoModel;