const STORAGE_KEY = 'mini-task-manager-tasks';
const form = document.querySelector('#task-form');
const input = document.querySelector('#task-input');
const list = document.querySelector('#task-list');
const count = document.querySelector('#count');
const empty = document.querySelector('#empty-state');
const clearCompleted = document.querySelector('#clear-completed');

let tasks;
try {
  const saved = JSON.parse(localStorage.getItem(STORAGE_KEY));
  tasks = Array.isArray(saved) ? saved : [];
} catch {
  tasks = [];
}

function save() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
}

function render() {
  list.replaceChildren();
  for (const task of tasks) {
    const item = document.createElement('li');
    if (task.done) item.classList.add('done');

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = task.done;
    checkbox.setAttribute('aria-label', `Complete ${task.text}`);
    checkbox.addEventListener('change', () => {
      task.done = checkbox.checked;
      save();
      render();
    });

    const text = document.createElement('span');
    text.className = 'task-text';
    text.textContent = task.text;

    const remove = document.createElement('button');
    remove.className = 'delete';
    remove.textContent = 'Delete';
    remove.setAttribute('aria-label', `Delete ${task.text}`);
    remove.addEventListener('click', () => {
      tasks = tasks.filter(t => t.id !== task.id);
      save();
      render();
    });
    item.append(checkbox, text, remove);
    list.append(item);
  }
  const completed = tasks.filter(task => task.done).length;
  count.textContent = `${completed} of ${tasks.length} completed`;
  empty.hidden = tasks.length > 0;
}

form.addEventListener('submit', event => {
  event.preventDefault();
  const text = input.value.trim();
  if (!text) return;
  tasks.push({ id: crypto.randomUUID(), text, done: false });
  save();
  render();
  form.reset();
  input.focus();
});

clearCompleted.addEventListener('click', () => {
  tasks = tasks.filter(task => !task.done);
  save();
  render();
});

render();
