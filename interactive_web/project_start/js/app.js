
//Problem: User interaction doesn't provide desired results.
//solution: Add interactivity so the user can manage daily tasks.
var taskInput = document.getElementById("new-task"); //
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete tasks
var completedTasksHolder = document.getElementById("completed-tasks");  //

     //New Task List Item
var createNewTaskElement = function(taskString) {
     // Create list item
var listItem = document.createElement("li");
     //input checkbox
var checkBox = document.createElement("input");
     //label
var label = document.createElement("label");
     //input (text)
var editInput = document.createElement("input");
     //button.edit
var editButton = document.createElement("button");
     //button.delete
var deleteButton = document.createElement("button");
 
    //each element needs to be modified 

//and appended to the document
listItem.appendChild(label);
listItem.appendChild(editInput);
listItem.appendChild(editButton);
listItem.appendChild(deleteButton);

return listItem;
}  

//Add a new task
var addTask = function() {  
  console.log("Add task...");
  var listItem = createNewTaskElement("Some New Task");
  incompleteTasksHolder.appendChild(listItem);
}

//Edit an existing task
var editTask = function() {
console.log("Edit task...");
  //when the edit button is pressed, if the class of the parent is editMode, we want to switch from editMode
  //label text becomes the input value
  //else,
  //switch to editMode
  //input a value becomes label's text
//toggle editMode on the parent
}
//Delete an existing task
var deleteTask = function() {
console.log("Delete task...");
  //when delete is pressed
  //remove parent list item
}

//mark a task as completed
var taskCompleted = function() {
console.log("Task completed...");
var listItem = this(parentNode);
completedTasksHolder.appendChild(listItem);
}

//mark a task as incomplete
var taskIncomplete = function() {
console.log("Task incompleted...");
var listItem = this(parentNode);
incompleteTasksHolder.appendChild(listItem);
  //when the checkbox is NOT checked
  //append the task list item to the #incomplete-tasks:
}

var bindTaskEvents = function(taskListItem, checkBoxEventHandler) {
console.log("bind list item events");
//bind the children to the li
var checkBox = taskListItem.querySelector("input[type=checkbox]"); 
var editButton = taskListItem.querySelector("button-edit"); 
var deleteButton = taskListItem.querySelector("delete-edit"); 
//bind editTask to edit button
editButton.onclick = editTask;
//bind deleteTask to delete button
deleteButton.onclick = deleteTask;
//bind taskComplete to checkbox
checkbox.onchange = taskComplete;
}
//Set the click handler to the addTask function
addButton.onclick = addTask; 

for (var i = 0; i < incompleteTasksHolder.children.length; i++) {
bindTaskEvents(incompleteTasksHolder.children[i], taskCompleted);
    //bind event to list item's children
}

for (var i = 0; i < completedTasksHolder.children.length; i++) {
bindTaskEvents(completedTasksHolder.children[i], taskIncomplete);
    //bind event to list item's children

}

