var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
var listItem = document.createElement('li');

var userInput = [ 

]
var index = 0; 
//Starter Game Render ToDo
//empty array

function toDoRender(){

  //todoList.appendChild(todos); 
  for(var i = 0; i < todos.length; i++){
    // console.log(i)
   // make new elementDo
    var completeButton = document.createElement('button'); 
    completeButton.innerText = 'complete'; 
    completeButton.setAttribute('type', 'button')
    listItem.innerText = todos[i] 
    // todos.push(listItem); 
    // console.log(todos);
    todoList.appendChild(listItem); 
    listItem.appendChild(completeButton); 
    console.log(todos[i])
  //addToList(listItem); 
  }
}
toDoRender();
//render();

function addToList(listItem){

  var listItem = document.createElement('li'); 
  listItem.innerText = todoInput.value;
  todos.push(listItem);  
  todoList.appendChild(listItem); 

}
//Create new to do element 
//Listen for the submit
// Make toDo Element
//add text to the toDo element
//add it to the to do data
//append/re-display it to the page

todoForm.addEventListener('submit', addToList); 
// //Remove to do elements
// //counter function 