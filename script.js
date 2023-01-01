const todoInput = document.getElementById("todoInput");
const addButton = document.getElementById("addButton");
const todoList = document.getElementById("todoList");

var todos = [];

addButton.addEventListener("click", function () {
  if (todoInput.value === "") {
    alert("Input not empty");
    return;
  }
  const todoContainer = document.createElement("div");
  const todoText = document.createElement("h2");
  const todoButtons = document.createElement("div");
  const doneButton = document.createElement("button");
  const deleteButton = document.createElement("button");

  const todoId = new Date().getTime();

  todoText.innerText = todoInput.value;
  doneButton.innerText = "Done";
  deleteButton.innerText = "Delete";
  todoButtons.appendChild(doneButton);
  todoButtons.appendChild(deleteButton);
  todoContainer.appendChild(todoText);
  todoContainer.appendChild(todoButtons);
  todoButtons.classList.add("buttons");
  todoContainer.classList.add("todoContainer");
  doneButton.id = "doneButton";
  deleteButton.id = "deleteButton";
  todoContainer.id = todoId;

  deleteButton.addEventListener("click", function () {
    deleteTodo(todoId);
  });
  doneButton.addEventListener("click", function () {
    updateTodo(todoId);

    if (todoContainer.classList.contains("done")) {
      doneButton.innerText = "Undone";
    } else {
      doneButton.innerText = "Done";
    }
  });

  todos.push(todoContainer);
  appendTodos();
  todoInput.value = "";
});

function appendTodos() {
  todoList.innerHTML = "";
  for (var i = 0; i < todos.length; i++) {
    todoList.appendChild(todos[i]);
  }
}

function deleteTodo(id) {
  var tempArr = [];
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id != id) {
      tempArr.push(todos[i]);
    }
  }
  todos = tempArr;
  appendTodos();
}

function updateTodo(id) {
  for (var i = 0; i < todos.length; i++) {
    if (todos[i].id == id) {
      todos[i].classList.toggle("done");
    }
  }
}
