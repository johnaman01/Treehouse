//Problem: User interaction doesn't provide desired results.
//solution: Add interactivity so the user can manage daily tasks.
var taskInput = document.getElementById("new-task"); //
var addButton = document.getElementsByTagName("button")[0]; //first button
var incompleteTasksHolder = document.getElementById("incomplete-tasks"); //incomplete tasks
var completedTasksHolder = document.getElementById("completed-tasks");  //
//Add a new task
var addTask = function() {  

//When the button is pressed
  //Create a new list item with the text from #new-task:
     //input checkbox
     //label
     //input (text)
     //button.edit
     //button.delete
     //each element needs to be modified and appended to the document
}

//Edit an existing task
var editTask = function() {
  //when the edit button is pressed, if the class of the parent is editMode, we want to switch from editMode
  //label text becomes the input value
  //else,
  //switch to editMode
  //input a value becomes label's text
//toggle editMode on the parent
}
//Delete an existing task
var deleteTask = function() {
  //when delete is pressed
  //remove parent list item
}

//mark a task as complete
var completeTask = function() {
  //when the checkbox is checked
  //append the task list item to the completed list
}

//mark a task as incomplete
var incompleteTask = function() {
  //when the checkbox is NOT checked
  //append the task list item to the #incomplete-tasks:
}
