const API_BASE = '/api';
const STORAGE_KEY = 'taskflow_demo_tasks_v1';
const initialTasks = [
  { id: 1, title: 'Complete API endpoints', description: 'Create and test GET and POST endpoints.', status: 'completed', createdAt: new Date().toISOString() },
  { id: 2, title: 'Add input validation', description: 'Validate required fields before creating tasks.', status: 'pending', createdAt: new Date().toISOString() },
  { id: 3, title: 'Connect frontend', description: 'Fetch API data and submit new tasks from the UI.', status: 'pending', createdAt: new Date().toISOString() }
];

const $ = selector => document.querySelector(selector);
const list = $('#task-list');
const statusPill = $('#api-status');
const form = $('#task-form');
const message = $('#form-message');
let localMode = false;

function getLocalTasks(){
  const saved = localStorage.getItem(STORAGE_KEY);
  if(saved) { try { return JSON.parse(saved); } catch { localStorage.removeItem(STORAGE_KEY); } }
  localStorage.setItem(STORAGE_KEY, JSON.stringify(initialTasks));
  return [...initialTasks];
}
function setLocalTasks(tasks){ localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks)); }
function escapeHtml(value){ return String(value).replace(/[&<>'"]/g, c => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c])); }
function renderTasks(tasks){
  if(!tasks.length){ list.innerHTML = '<div class="empty">No tasks yet. Create the first one.</div>'; return; }
  list.innerHTML = tasks.map(t => `<article class="task"><div class="task-top"><h4>${escapeHtml(t.title)}</h4><span class="badge">${escapeHtml(t.status)}</span></div><p>${escapeHtml(t.description || 'No description provided.')}</p></article>`).join('');
}
async function apiRequest(path, options={}){
  const response = await fetch(`${API_BASE}${path}`, { headers:{'Content-Type':'application/json'}, ...options });
  const body = await response.json().catch(() => ({success:false,message:'Invalid server response'}));
  if(!response.ok) throw new Error(body.message || 'Request failed');
  return body;
}
async function checkApi(){
  try { await apiRequest('/health'); localMode = false; statusPill.textContent = '● API online · Express'; statusPill.classList.add('online'); }
  catch { localMode = true; statusPill.textContent = '● Static demo mode · Local storage'; statusPill.classList.add('online'); }
}
async function loadTasks(){
  list.innerHTML = '<div class="loading">Loading tasks…</div>';
  if(localMode){ renderTasks(getLocalTasks()); return; }
  try { const result = await apiRequest('/tasks'); renderTasks(result.data); }
  catch { localMode = true; statusPill.textContent = '● Static demo mode · Local storage'; renderTasks(getLocalTasks()); }
}
form.addEventListener('submit', async event => {
  event.preventDefault(); message.className='form-message'; message.textContent='';
  const payload = { title: $('#title').value.trim(), description: $('#description').value.trim(), status: $('#status').value };
  try {
    if(localMode){ const tasks=getLocalTasks(); const nextId=tasks.reduce((m,t)=>Math.max(m,Number(t.id)||0),0)+1; tasks.unshift({id:nextId,...payload,createdAt:new Date().toISOString()}); setLocalTasks(tasks); message.textContent='Task created successfully.'; }
    else { const result=await apiRequest('/tasks',{method:'POST',body:JSON.stringify(payload)}); message.textContent=result.message; }
    form.reset(); await loadTasks();
  } catch(error){ message.className='form-message error'; message.textContent=error.message; }
});
$('#refresh').addEventListener('click', loadTasks);
(async function init(){ await checkApi(); await loadTasks(); })();
