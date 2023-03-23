document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("create-task-form");
  form.addEventListener('submit', function(event) {
    event.preventDefault();
  });
  
    const button = document.getElementById('create-button');
    button.addEventListener('click', function() {
      const taskInput = document.getElementById('new-task-description');
      const taskString = taskInput.value;
      const taskList = document.getElementById('tasks');
      const newTask = document.createElement('li');
      newTask.innerText = taskString;
      taskList.appendChild(newTask);
      taskInput.value = '';

      const deleteButton = document.createElement('button');
      deleteButton.innerText = 'Delete';
      deleteButton.addEventListener('click', function(event) {
        const taskRemove = event.target.parentElement;
        taskRemove.remove();
      });
      newTask.appendChild(deleteButton);
  
      taskList.appendChild(newTask);
      taskInput.value = '';
    });
  });
