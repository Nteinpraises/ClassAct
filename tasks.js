// tasks.js — task list logic (depends on storage.js being loaded first)
let tasks = load('pb_tasks', []);
const taskList = document.getElementById('taskList');
const taskInput = document.getElementById('taskInput');
const taskPrio = document.getElementById('taskPrio');

function renderTasks() {
  taskList.innerHTML = '';
  if (tasks.length === 0) {
    taskList.innerHTML = '<div class="empty">No tasks yet — add your first one above.</div>';
  }
  tasks.forEach((t, i) => {
    const li = document.createElement('li');
    li.className = 'task-item' + (t.done ? ' done' : '');
    li.innerHTML = `<button class="check" style="${t.done ? 'background:var(--task);' : ''}" data-i="${i}" data-act="toggle"></button>
      <span>${t.text}</span><span class="prio ${t.priority}">${t.priority}</span>
      <button class="icon-btn" data-i="${i}" data-act="del">✕</button>`;
    taskList.appendChild(li);
  });
  document.getElementById('statTasks').textContent =
    tasks.filter(t => t.done && t.date === todayKey()).length;
}

function addTask() {
  const text = taskInput.value.trim();
  if (!text) return;
  tasks.push({ text, priority: taskPrio.value, done: false, date: todayKey() });
  taskInput.value = '';
  save('pb_tasks', tasks);
  renderTasks();
}

taskInput.addEventListener('keydown', e => { if (e.key === 'Enter') addTask(); });
document.getElementById('addTaskBtn').addEventListener('click', addTask);

taskList.addEventListener('click', e => {
  const i = e.target.dataset.i, act = e.target.dataset.act;
  if (i === undefined) return;
  if (act === 'toggle') {
    tasks[i].done = !tasks[i].done;
    if (tasks[i].done) tasks[i].date = todayKey();
  }
  if (act === 'del') tasks.splice(i, 1);
  save('pb_tasks', tasks);
  renderTasks();
});

renderTasks();
