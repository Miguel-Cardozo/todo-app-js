// ====== Estado do app ======
let tasks = [];
let currentFilter = "all";

// ====== Seletores ======
const taskForm = document.getElementById("taskForm");
const taskInput = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const stats = document.getElementById("stats");
const clearDoneBtn = document.getElementById("clearDone");
const filterButtons = document.querySelectorAll(".chip");

// ====== Util ======
function uid() {
  return Date.now().toString(36) + Math.random().toString(36).slice(2, 7);
}

function save() {
  localStorage.setItem("miguel_todo_tasks", JSON.stringify(tasks));
}

function load() {
  const data = localStorage.getItem("miguel_todo_tasks");
  tasks = data ? JSON.parse(data) : [];
}

function formatDate(iso) {
  const d = new Date(iso);
  return d.toLocaleString("pt-br", { dateStyle: "short", timeStyle: "short" });
}

// ====== Regras de filtro ======
function getFilteredTasks() {
  if (currentFilter === "active") return tasks.filter(t => !t.done);
  if (currentFilter === "done") return tasks.filter(t => t.done);
  return tasks;
}

// ====== Render ======
function render() {
  const list = getFilteredTasks();
  taskList.innerHTML = "";

  list.forEach(task => {
    const card = document.createElement("article");
    card.className = "card" + (task.done ? " done" : "");

    const left = document.createElement("div");
    left.className = "task";
    left.title = "Clique para marcar como concluída";

    const title = document.createElement("div");
    title.className = "task-title";
    title.textContent = task.title;

    const meta = document.createElement("div");
    meta.className = "task-meta";
    meta.textContent = `Criado em ${formatDate(task.createdAt)}`;

    left.appendChild(title);
    left.appendChild(meta);

    left.addEventListener("click", () => toggleDone(task.id));

    const right = document.createElement("div");
    right.className = "actions";

    const badge = document.createElement("span");
    badge.className = "badge" + (task.done ? " ok" : "");
    badge.textContent = task.done ? "Concluída" : "Pendente";

    const editBtn = document.createElement("button");
    editBtn.className = "btn btn-outline";
    editBtn.textContent = "Editar";
    editBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      editTask(task.id);
    });

    const delBtn = document.createElement("button");
    delBtn.className = "btn btn-danger";
    delBtn.textContent = "Excluir";
    delBtn.addEventListener("click", (e) => {
      e.stopPropagation();
      removeTask(task.id);
    });

    right.appendChild(badge);
    right.appendChild(editBtn);
    right.appendChild(delBtn);

    card.appendChild(left);
    card.appendChild(right);

    taskList.appendChild(card);
  });

  updateStats();
}

function updateStats() {
  const total = tasks.length;
  const done = tasks.filter(t => t.done).length;
  const active = total - done;
  stats.textContent = `${total} tarefas • ${active} pendentes • ${done} concluídas`;
}

// ====== CRUD ======
function addTask(title) {
  const trimmed = title.trim();
  if (!trimmed) return;

  const task = {
    id: uid(),
    title: trimmed,
    done: false,
    createdAt: new Date().toISOString()
  };

  tasks.unshift(task);
  save();
  render();
}

function toggleDone(id) {
  const t = tasks.find(x => x.id === id);
  if (!t) return;

  t.done = !t.done;
  save();
  render();
}

function editTask(id) {
  const t = tasks.find(x => x.id === id);
  if (!t) return;

  const novo = prompt("Editar tarefa:", t.title);
  if (novo === null) return; // cancelou
  const trimmed = novo.trim();
  if (!trimmed) return;

  t.title = trimmed;
  save();
  render();
}

function removeTask(id) {
  tasks = tasks.filter(x => x.id !== id);
  save();
  render();
}

function clearDone() {
  tasks = tasks.filter(t => !t.done);
  save();
  render();
}

// ====== Eventos ======
taskForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addTask(taskInput.value);
  taskInput.value = "";
  taskInput.focus();
});

clearDoneBtn.addEventListener("click", clearDone);

filterButtons.forEach(btn => {
  btn.addEventListener("click", () => {
    filterButtons.forEach(b => b.classList.remove("active"));
    btn.classList.add("active");
    currentFilter = btn.dataset.filter;
    render();
  });
});

// ====== Inicialização ======
load();
render();
