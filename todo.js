// To-Do List Script
const todoInput = document.getElementById("todo-input");
const addTodoBtn = document.getElementById("add-todo");
const todoList = document.getElementById("todo-list");

// Load tasks from localStorage when page loads
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
renderTasks();

// Function to add new task
function addTask() {
  const text = todoInput.value.trim();
  if (text === "") return alert("Enter a task!");

  const task = { text, completed: false };
  tasks.push(task);
  saveTasks();
  renderTasks();

  todoInput.value = "";
}

// Click event
addTodoBtn.addEventListener("click", addTask);

// Enter key event
todoInput.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    addTask();
  }
});

// Save tasks to localStorage
function saveTasks() {
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

// Render all tasks
function renderTasks() {
  todoList.innerHTML = ""; // clear existing tasks

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    // Checkbox for completion
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = task.completed;
    checkbox.addEventListener("change", () => {
      task.completed = checkbox.checked;
      saveTasks();
      li.classList.toggle("completed", task.completed);
    });

    // Task text
    const span = document.createElement("span");
    span.textContent = task.text;

    // Delete button
    const delBtn = document.createElement("button");
    delBtn.textContent = "❌";
    delBtn.style.background = "none";
    delBtn.style.border = "none";
    delBtn.style.cursor = "pointer";
    delBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      saveTasks();
      renderTasks();
    });

    li.appendChild(checkbox);
    li.appendChild(span);
    li.appendChild(delBtn);

    if (task.completed) li.classList.add("completed");

    todoList.appendChild(li);
  });
}
