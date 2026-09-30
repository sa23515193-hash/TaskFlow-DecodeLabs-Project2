let nextId = 4;
const tasks = [
  { id: 1, title: 'Complete API endpoints', description: 'Create and test GET and POST endpoints.', status: 'completed', createdAt: new Date().toISOString() },
  { id: 2, title: 'Add input validation', description: 'Validate required fields before creating tasks.', status: 'pending', createdAt: new Date().toISOString() },
  { id: 3, title: 'Connect frontend', description: 'Fetch API data and submit new tasks from the UI.', status: 'pending', createdAt: new Date().toISOString() }
];

function getTasks() { return tasks; }
function getTaskById(id) { return tasks.find(task => task.id === id); }
function addTask(task) { const newTask = { id: nextId++, ...task, createdAt: new Date().toISOString() }; tasks.unshift(newTask); return newTask; }
module.exports = { getTasks, getTaskById, addTask };
