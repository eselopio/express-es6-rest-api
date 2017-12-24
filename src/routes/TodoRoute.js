import express from 'express';
import todoController from '../controllers/TodoController';

const router = express.Router();

router.get('/', (req, res) =>{
    todoController.getAll(req, res);
});
router.get('/todo', (req, res)=>{
    todoController.getAllTodo(req, res);
});

export default router;