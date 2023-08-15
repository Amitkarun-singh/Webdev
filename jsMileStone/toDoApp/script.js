/*21. TODO App
Create a simple to-do app to add TODO items to the list through an input field and a button. */

const input = document.querySelector("#todoInput");
const button = document.querySelector("#todoAdd");
const todoList = document.querySelector("#todoList");

button.addEventListener("click", function(){
    const todoText = input.value.trim();

    if(todoText !== ""){
        const newTodo = document.createElement("li");
        newTodo.textContent = todoText;
        todoList.appendChild(newTodo);
        input.value = "";
    }
});