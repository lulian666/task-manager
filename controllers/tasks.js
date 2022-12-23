const Task = require('../models/task')

const getAllTasks = (req, res) => {
    res.send('all items..')
}

const createTask = async (req, res) => {
    const task = await Task.create(req.body)
    res.status(201).json(task)
}

const getTask = (req, res) => {
    res.send({ id: req.params.id })
}

const updateTask = (req, res) => {
    console.log(req)
    res.send('updateTask')
}

const deleteTask = (req, res) => {
    console.log(req)
    res.send('deleteTask')
}

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}