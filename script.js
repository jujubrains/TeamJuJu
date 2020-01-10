var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];
var userInput = [ 

]
var index = 0; 
//Starter Game Render ToDo
//empty array

function render(){
  //todoList.appendChild(todos); 

  for(var i = 0; i < todos.length; i++){
    //console.log(i)
    //make new element
    var listItem = document.createElement('li');
    listItem.innerText = todos[i] 
    todoList.appendChild(listItem); 
    console.log(todos[i])

  }
}
render();


  //var listItem = document.createElement('p'); 
  //listItem.innerText = todoInput.value; 
  //todoList.appendChild(listItem); 
  


//Create new to do element 
//Listen for the submit
// Make toDo Element
//add text to the toDo element
//add it to the to do data
//append/re-display it to the page




//Remove to do elements




//counter function 
//todoInput.addEventListener('click', render); 





