const express = require('express');
const tasksController = require('./controllers/tasksController');

const router = express.Router();

// Rotas de Crud
router.get('/tasks', tasksController.getAll);
router.get('/tasks/:id', tasksController.getById);
// router.post('/tasks', tasksController.create);
// router.put('/tasks/:id', tasksController.update);
// router.delete('/tasks/:id', tasksController.remove);

module.exports = router;