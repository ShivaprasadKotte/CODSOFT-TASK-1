document.addEventListener("DOMContentLoaded", function() {
    var taskInput = document.getElementById("task-input");
    var addTaskBtn = document.getElementById("add-task-btn");
    var taskList = document.getElementById("task-list");
  
    addTaskBtn.addEventListener("click", function() {
      var task = taskInput.value;
      if (task) {
        var taskItem = document.createElement("li");
        taskItem.className = "task-item";
        taskItem.innerHTML = task;
        
        var deleteBtn = document.createElement("button");
        deleteBtn.className = "delete-btn";
        deleteBtn.innerHTML = "Delete";
        deleteBtn.addEventListener("click", function() {
          taskItem.remove();
        });
        
        taskItem.appendChild(deleteBtn);
        taskList.appendChild(taskItem);
        
        taskInput.value = "";
      }
    });
  });