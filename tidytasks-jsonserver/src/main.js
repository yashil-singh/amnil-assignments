import { toggleTodoCompleteApi } from "@js/api/todos";
import { verifyToken } from "@js/api/users";
import { loadUserData } from "@js/auth/getUserData";
import {
  addTodoCategoryInput,
  addTodoForm,
  addTodoSubmitButton,
  addTodoTitleInput,
  deleteTodoSubmitButton,
  selectedTodo,
  setSeletedTodo,
  todosContainer,
} from "@js/todo";
import { deleteTodoModal, openModal } from "@js/todoModal";
import createTodo from "@js/todos/createTodo";
import deleteTodo from "@js/todos/deleteTodo";
import loadIndexTodos from "@js/todos/loadIndexTodos";

const token = localStorage.getItem("token");

if (!token) window.location.href = "/login";

const validToken = await verifyToken(token);

if (!validToken) {
  window.location.href = "/login";
} else {
  if (!validToken.success) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  } else {
    localStorage.setItem("user", JSON.stringify(validToken.data));
  }
}

// Loading user data;
loadUserData();

// Loading tasks in index page
loadIndexTodos();

// Creating todo
addTodoForm.addEventListener("submit", async (e) => {
  e.preventDefault();

  addTodoSubmitButton.disabled = true;
  addTodoSubmitButton.innerText = "Adding...";

  const title = addTodoTitleInput.value;
  const category = addTodoCategoryInput.value;

  const newTodoElement = await createTodo(title, category);

  if (todosContainer.innerText === "No tasks added yet.") {
    todosContainer.innerText = "";
  }

  todosContainer.appendChild(newTodoElement);
  lucide.createIcons();

  addTodoSubmitButton.disabled = false;
  addTodoSubmitButton.innerText = "Add";
});

// Deleting todo
deleteTodoSubmitButton.addEventListener("click", async () => {
  const id = selectedTodo.todoId;

  await deleteTodo(id);

  if (todosContainer.innerHTML === "") {
    todosContainer.innerText = "No tasks added yet.";
  }
});
// Adding event listeners to action buttons
todosContainer.addEventListener("click", async (e) => {
  const deleteButton = e.target.closest(".delete-todo");
  if (deleteButton) {
    setSeletedTodo(deleteButton);
    openModal(deleteTodoModal);
  } else if (e.target.classList.contains("toggle-checkbox")) {
    const id = e.target.getAttribute("data-id");

    const response = await toggleTodoCompleteApi(id);

    if (response.success) {
      const title = document.querySelector(`[data-id-title='${id}']`);
      title.classList.toggle("done");
    }
  }
});
