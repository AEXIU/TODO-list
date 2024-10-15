// Select DOM elements
const todoForm = document.getElementById('todo-form');
const todoInput = document.getElementById('todo-input');
const todoList = document.getElementById('todo-list');

// Function to add a new task
function addTodo(event) {
    event.preventDefault(); // Prevent form submission from reloading the page

    // Get the task text
    const taskText = todoInput.value;

    // Validate input
    if (taskText.trim() === "") {
        alert("Please enter a task!");
        return;
    }

    // Create list item (li) for the new task
    const todoItem = document.createElement('li');

    // Create a container for task info
    const taskInfo = document.createElement('div');
    taskInfo.classList.add('task-info');

    // Create checkbox for marking task as completed
    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';

    // Create a span for task text
    const taskTextSpan = document.createElement('span');
    taskTextSpan.textContent = taskText;

    // Create a timestamp
    const timestamp = document.createElement('span');
    timestamp.classList.add('timestamp');
    timestamp.textContent = new Date().toLocaleString(); // Current date and time

    // Append checkbox and task text to task info
    taskInfo.appendChild(checkbox);
    taskInfo.appendChild(taskTextSpan);
    taskInfo.appendChild(timestamp);

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-btn');

    // Append task info and delete button to the task item
    todoItem.appendChild(taskInfo);
    todoItem.appendChild(deleteButton);

    // Append the task item to the task list (ul)
    todoList.appendChild(todoItem);

    // Clear input field after adding task
    todoInput.value = '';

    // Event listener for deleting task
    deleteButton.addEventListener('click', function() {
        todoList.removeChild(todoItem);
    });

    // Event listener for marking task as completed
    checkbox.addEventListener('change', function() {
        if (checkbox.checked) {
            taskTextSpan.style.textDecoration = "line-through";
        } else {
            taskTextSpan.style.textDecoration = "none";
        }
    });
}

// Add event listener to the form
todoForm.addEventListener('submit', addTodo);
