// Array to store all tasks
const tasks = [];

// Get DOM elements
const taskList = document.getElementById("task-list");
const input = document.getElementById("task-input");

/**
 * Renders all tasks in the DOM
 * Clears the list and recreates all task elements
 */
const renderTasks = () => {
  taskList.innerHTML = "";
  tasks.forEach((task, index) => {
    // Create list item for each task
    const li = document.createElement("li");
    li.className = "task" + (task.completed ? " completed" : "");

    // Create text element that toggles completion on click
    const span = document.createElement("span");
    span.innerText = task.text;
    span.addEventListener("click", () => {
      completeTask(index);
    });

    // Create edit button
    const editBtn = document.createElement("button");
    editBtn.innerText = "Edit";
    editBtn.onclick = () => {
      updateTask(index);
    };

    // Create delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "Delete";
    deleteBtn.onclick = () => {
      deleteTask(index);
    };

    // Add all elements to the list item
    li.append(span, editBtn, deleteBtn);
    taskList.append(li);
  });
};

/**
 * Adds a new task from the input field
 * Validates that the input is not empty
 */
const addTask = () => {
  const text = input.value.trim(); // Remove whitespace from both ends
  if (!text) return; // Don't add empty tasks
  tasks.push({ text: text, completed: false });
  input.value = ""; // Clear input field
  renderTasks(); // Update the UI
};

/**
 * Updates an existing task
 * @param {number} index - The index of the task to update
 */
const updateTask = (index) => {
  const newText = prompt("Edit your task: ", tasks[index].text);

  // Only update if user didn't cancel and provided non-empty text
  if (newText !== null && newText.trim()) {
    tasks[index].text = newText;
    renderTasks(); // Update the UI
  }
};

/**
 * Deletes a task
 * @param {number} index - The index of the task to delete
 */
const deleteTask = (index) => {
  tasks.splice(index, 1); // Remove task from array
  renderTasks(); // Update the UI
};

/**
 * Toggles the completion status of a task
 * @param {number} index - The index of the task to toggle
 */
const completeTask = (index) => {
  tasks[index].completed = !tasks[index].completed; // Toggle completed state
  renderTasks(); // Update the UI
};

// Add event listener to the add button
document.getElementById("add-btn").addEventListener("click", addTask);
