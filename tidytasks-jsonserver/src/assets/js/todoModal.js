import { addClassName, removeClassName } from "@js/utils";
import {
  addTodoCategoryInput,
  addTodoSubmitButton,
  addTodoTitleInput,
} from "./todo";

// Overlay
export const overlay = document.querySelector(".overlay");

// Modals
export const addTodoModal = document.getElementById("add-todo-modal");
export const editTodoModal = document.getElementById("edit-todo-modal");
export const deleteTodoModal = document.getElementById("delete-todo-modal");

const openModal = (modal) => {
  addClassName(overlay, "active");
  removeClassName(modal, "hidden");
};

const closeModal = () => {
  addClassName(overlay, "closing");
  setTimeout(() => {
    removeClassName(overlay, "closing", "active");
  }, 300);

  addClassName(addTodoModal, "hidden");
  addClassName(editTodoModal, "hidden");
  addClassName(deleteTodoModal, "hidden");

  // reset add todo form
  addTodoTitleInput.value = "";
  addTodoCategoryInput.value = "";
  addTodoSubmitButton.innerText = "Add";
  addTodoSubmitButton.disabled = false;

  // reset edit todo form
  // editTodoTitleInput.value = "";
  // editTodoCategoryInput.value = "";
  // editTodoSubmitButton.innerText = "Edit";
  // editTodoSubmitButton.disabled = false;
};

export { openModal, closeModal };
