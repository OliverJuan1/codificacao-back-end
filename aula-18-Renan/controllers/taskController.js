const taskService = require('../services/taskService')

const getAll = (req, res) => {
    const tasks = taskService.getAll()
    res.json(tasks)
}

const getById = (req, res, next) => {
    try {
        const id = parseInt(req.params.id)
        const task = taskService.getById(id)
        res.json(task)
    } catch (error) {
        next(error)
    }
}

// create, post, delete
const create = (req, res, next) => {
    try {
        const { title } = req.body; // pegando o titulo do corpo da requisicao
        const task = taskService.create(title);
        res.status(201).json(task);
    } catch (error) {
        next(error);
    }
}

// update
const update = (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const { title, done } = req.body;
        const task = taskService.update(id, { title, done });
        res.json(task);

    } catch (error) {
        next(error);
    }
}

const remove = (req, res, next) => {
    try {
        const id = parseInt(req.params.id);
        const deleted = taskService.del(id);
        res.json({ msg: "Tarefinha excluida" });
    } catch (error) {
        next(error);
    }
}
module.exports = { getAll, getById , create, update, remove }