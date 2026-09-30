const { getTasks, getTaskById, addTask } = require('../data/tasks');

function getAllTasks(req, res) {
  return res.status(200).json({ success: true, count: getTasks().length, data: getTasks() });
}

function getSingleTask(req, res) {
  const id = Number(req.params.id);
  if (!Number.isInteger(id) || id < 1) return res.status(400).json({ success: false, message: 'Task ID must be a positive integer' });
  const task = getTaskById(id);
  if (!task) return res.status(404).json({ success: false, message: 'Task not found' });
  return res.status(200).json({ success: true, data: task });
}

function createTask(req, res) {
  const { title, description = '', status = 'pending' } = req.body || {};
  const cleanTitle = typeof title === 'string' ? title.trim() : '';
  const cleanDescription = typeof description === 'string' ? description.trim() : '';
  const allowedStatuses = ['pending', 'in-progress', 'completed'];

  if (!cleanTitle) return res.status(400).json({ success: false, message: 'Title is required' });
  if (cleanTitle.length < 3) return res.status(400).json({ success: false, message: 'Title must be at least 3 characters' });
  if (cleanTitle.length > 100) return res.status(400).json({ success: false, message: 'Title must not exceed 100 characters' });
  if (cleanDescription.length > 500) return res.status(400).json({ success: false, message: 'Description must not exceed 500 characters' });
  if (!allowedStatuses.includes(status)) return res.status(400).json({ success: false, message: `Status must be one of: ${allowedStatuses.join(', ')}` });

  const task = addTask({ title: cleanTitle, description: cleanDescription, status });
  return res.status(201).json({ success: true, message: 'Task created successfully', data: task });
}

module.exports = { getAllTasks, getSingleTask, createTask };
