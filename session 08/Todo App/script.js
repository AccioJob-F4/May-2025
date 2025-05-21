const tasks = [];

const taskList = document.getElementById("task-list");
const input = document.getElementById("task-input");

const renderTasks = () => {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    const li = document.createElement("li");
    li.className = "task" + (task.completed ? " completed" : "");

    const span = document.createElement("span");
    span.innerText = task.text;
    span.addEventListener("click", () => {
      completeTask(index);
    });

    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.onclick = () => {
      updateTask(index);
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = () => {
      deleteTask(index);
    };

    li.append(span, editBtn, deleteBtn);
    taskList.append(li);
  });
};

const addTask = () => {
  const text = input.value.trim(); // "  hola  " -> "hola"
  if (!text) return;
  tasks.push({ text: text, completed: false });
  input.value = "";
  renderTasks();
};

const updateTask = (index) => {
  const newText = prompt("Edit your task: ", tasks[index].text);

  if (newText !== null && newText.trim()) {
    tasks[index].text = newText;
    renderTasks();
  }
};

const deleteTask = (index) => {
  tasks.splice(index, 1);
  renderTasks();
};

const completeTask = (index) => {
  tasks[index].completed = !tasks[index].completed;
  renderTasks();
};

document.getElementById("add-btn").addEventListener("click", addTask);
