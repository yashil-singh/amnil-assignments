import { addClassName, removeClassName } from "@js/utils";
import deleteTodo from "./todos/deleteTodo";
import {
  addTodoModal,
  closeModal,
  deleteTodoModal,
  editTodoModal,
  openModal,
  overlay,
} from "./todoModal";
import createTodo from "./todos/createTodo";
import { toggleTodoCompleteApi } from "./api/todos";

// Add todo form elements
export const addTodoForm = document.getElementById("add-todo-form"); // add form

export const addTodoTitleInput = document.getElementById("add-title"); // add title
export const addTodoCategoryInput = document.getElementById("add-category"); // add category

// Edit todo form elements
export const editTodoForm = document?.getElementById("edit-todo-form");
export const editTodoTitleInput = document.getElementById("edit-title"); // edit title
export const editTodoCategoryInput = document.getElementById("edit-category"); // edit category

// Submit Buttons
export const addTodoSubmitButton = document.getElementById("add-submit-button");
export const editTodoSubmitButton =
  document.getElementById("edit-submit-button");
export const deleteTodoSubmitButton = document.getElementById(
  "delete-submit-button",
);

// Modal Open Buttons
export const openAddModalButton = document.getElementById(
  "add-todo-modal-open-button",
);

export const openDeleteModalButton = document.getElementById(
  "delete-todo-modal-open-button",
);

export let selectedTodo = null;

export const setSeletedTodo = (button) => {
  const todoId = button.getAttribute("data-id");
  const todoTitle = button.getAttribute("data-title");
  const todoCategory = button.getAttribute("data-category");

  selectedTodo = { todoId, todoTitle, todoCategory };
};

export const todosContainer = document.getElementById("tasks-container");

// Avoid closing modal when clicking on the overlay content
addTodoModal?.addEventListener("click", (e) => {
  e.stopPropagation();
});
editTodoModal?.addEventListener("click", (e) => {
  e.stopPropagation();
});
deleteTodoModal?.addEventListener("click", (e) => {
  e.stopPropagation();
});

// Close the modal when clicked on overlay
overlay?.addEventListener("click", () => {
  closeModal();
});

// Close the modal when 'esc' key is pressed
document?.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    closeModal();
  }
});

// Close the modal when close button is clicked
document?.querySelectorAll("[data-close-modal]").forEach((button) => {
  button.addEventListener("click", closeModal);
});

overlay?.addEventListener("click", closeModal);

// Opening add todo modal
openAddModalButton.addEventListener("click", () => {
  openModal(addTodoModal);
  addTodoTitleInput.focus();
});

const toggleCategoryExpand = (id) => {
  const categoryContainer = document.getElementById(`category-${id}`);

  if (!categoryContainer) return;

  if (categoryContainer.classList.contains("active")) {
    addClassName(categoryContainer, "closing");

    setTimeout(() => {
      removeClassName(categoryContainer, "active", "closing");
    }, 300);
  } else {
    addClassName(categoryContainer, "active");
  }
};

document.querySelectorAll("#category-toggle-button").forEach((button) => {
  button.addEventListener("click", (e) => {
    const categoryId = e.currentTarget.getAttribute("data-category-id");
    toggleCategoryExpand(categoryId);

    if (button.classList.contains("chevron-rotated")) {
      button.classList.toggle("chevron-rotate-back");

      setTimeout(() => {
        button.classList.toggle("chevron-rotate-back");
        button.classList.toggle("chevron-rotated");
      }, 300);
    } else {
      button.classList.toggle("chevron-rotating");

      setTimeout(() => {
        button.classList.toggle("chevron-rotating");
        button.classList.toggle("chevron-rotated");
      }, 300);
    }
  });
});
