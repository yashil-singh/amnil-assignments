import { verifyToken } from "@js/api/users";
import { loadUserData } from "@js/auth/getUserData";
import {
  addTodoForm,
  createTodoElement,
  deleteTodoSubmitButton,
  editTodoForm,
  selectedTodo,
  todosContainer,
} from "@js/todos/todo";
import deleteTodo from "@js/todos/deleteTodo";
import { fetchTodos } from "@js/todos/fetchTodos";
import { toastError } from "@js/ui/toast";
import { editTodo } from "@js/todos/editTodo";
import { createTodo } from "@js/todos/createTodo";

// Checking for token in localstorage
const token = localStorage.getItem("token");

if (!token) window.location.href = "/login";

// Verifying token
const validToken = await verifyToken(token);

if (!validToken) {
  window.location.href = "/login";
} else {
  if (!validToken.success) {
    toastError("You have been logged out.");

    setTimeout(() => {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      window.location.href = "/login";
    }, 1000);
  } else {
    // Setting user data in local storage
    localStorage.setItem("user", JSON.stringify(validToken.data));
  }
}

const loadTodos = async () => {
  todosContainer.innerText = "Loading todos...";
  const todos = await fetchTodos();

  todosContainer.innerText = "";
  todos.forEach((todo) => {
    const todoElement = createTodoElement(todo);

    todosContainer.appendChild(todoElement);
  });

  if (todos.length < 1) todosContainer.innerText = "No todos added yet.";

  lucide.createIcons();
};

// Loading user data;
loadUserData();

// Loading todos
loadTodos();

// Creating todo
addTodoForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  const newTodoElement = await createTodo();

  console.log(
    "🚀 ~ main.js:71 ~ todosContainer.innerText:",
    todosContainer.innerText,
  );
  if (todosContainer.innerText === "No todos added yet.") {
    todosContainer.innerText = "";
  }

  if (!newTodoElement) return;

  todosContainer.prepend(newTodoElement);
  lucide.createIcons();
});

// Editing todo
editTodoForm.addEventListener("submit", async (e) => {
  e.preventDefault();
  const id = selectedTodo.todoId;

  await editTodo(id);
});

// Deleting todo
deleteTodoSubmitButton.addEventListener("click", async () => {
  const id = selectedTodo.todoId;

  await deleteTodo(id);

  if (todosContainer.innerHTML === "") {
    todosContainer.innerText = "No todos added yet.";
  }
});
