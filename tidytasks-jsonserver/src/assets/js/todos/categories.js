import { toggleTodoCompleteApi } from "@js/api/todos";
import { openModal } from "../ui/modal";
import { toastError } from "@js/ui/toast";
import { fetchTodos } from "./fetchTodos";
import { createTodo } from "./createTodo";
import deleteTodo from "./deleteTodo";
import { editTodo } from "./editTodo";
import {
  addTodoCategoryInput,
  addTodoForm,
  addTodoModal,
  addTodoSubmitButton,
  addTodoTitleInput,
  createTodoElement,
  deleteTodoModal,
  deleteTodoSubmitButton,
  editTodoForm,
  editTodoModal,
  editTodoSubmitButton,
  editTodoTitleInput,
  openAddModalButton,
  titleError,
  todosContainer,
} from "./todoElements";

// Currently selected todo
let selectedTodo = null;

// To set the selected todo
const setSeletedTodo = (button) => {
  const todoId = button.getAttribute("data-todo-id");
  const todoTitle = button.getAttribute("data-todo-title");
  const todoCategory = button.getAttribute("data-todo-category");

  selectedTodo = { todoId, todoTitle, todoCategory };
};

// Adding event listeners to action buttons
todosContainer?.addEventListener("click", async (e) => {
  const deleteButton = e.target.closest(".delete-todo");
  const editButton = e.target.closest(".edit-todo");

  if (deleteButton) {
    setSeletedTodo(deleteButton);
    openModal(deleteTodoModal);
  } else if (editButton) {
    setSeletedTodo(editButton);

    editTodoTitleInput.value = selectedTodo.todoTitle;
    editTodoCategoryInput.value = selectedTodo.todoCategory;

    openModal(editTodoModal);
  } else if (e.target.classList.contains("toggle-checkbox")) {
    const id = e.target.getAttribute("data-id");

    const response = await toggleTodoCompleteApi(id);

    if (response.success) {
      const title = document.getElementById(`todo-${id}-title`);
      title.classList.toggle("done");
    } else {
      toastError(response.message);
    }
  }
});

export const loadCategories = () => {
  console.log("Loaded Categories");
};

console.log(import.meta.url);
