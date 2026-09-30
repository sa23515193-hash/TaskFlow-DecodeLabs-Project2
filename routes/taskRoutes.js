const express = require('express');
const { getAllTasks, getSingleTask, createTask } = require('../controllers/taskController');
const router = express.Router();
router.get('/', getAllTasks);
router.get('/:id', getSingleTask);
router.post('/', createTask);
module.exports = router;
