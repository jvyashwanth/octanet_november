function addTask() {
    const taskInput = document.getElementById('taskInput');
    const taskList = document.getElementById('taskList');
    const taskText = taskInput.value;
  
    if (taskText !== '') {
      const listItem = document.createElement('li');
      listItem.appendChild(document.createTextNode(taskText));
      taskList.appendChild(listItem);
      taskInput.value = '';
  
      listItem.onclick = function () {
        listItem.parentNode.removeChild(listItem);
      };
    } else {
      alert('Please enter a task!');
    }
  }
  