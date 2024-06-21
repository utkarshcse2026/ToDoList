const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Load tasks from local storage
const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

// Display tasks on the page
function displayTasks() {
  taskList.innerHTML = '';
  tasks.forEach((task, index) => {
    const li = document.createElement('li');
    li.innerHTML = `
      <span>${task}</span>
      <button onclick="editTask(${index})">Edit</button>
      <button onclick="deleteTask(${index})">Delete</button>
    `;
    taskList.appendChild(li);
  });
}

// Add a new task
function addTask() {
  const newTask = taskInput.value.trim();
  if (newTask !== '') {
    tasks.push(newTask);
    localStorage.setItem('tasks', JSON.stringify(tasks));
    taskInput.value = '';
    displayTasks();
  }
}

// Edit a task
function editTask(index) {
  const editedTask = prompt('Edit task:', tasks[index]);
  if (editedTask !== null) {
    tasks[index] = editedTask;
    localStorage.setItem('tasks', JSON.stringify(tasks));
    displayTasks();
  }
}

// Delete a task
function deleteTask(index) {
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
  displayTasks();
}

// Initial display
displayTasks();