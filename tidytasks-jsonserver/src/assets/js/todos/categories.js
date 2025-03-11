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
import { getTodosByUserIdAndCategory } from "@controllers/todoController";
import { currentUser } from "@js/auth/getUserData";
import { toggleCategoryExpand } from "@js/ui/categoryAccordion";

const categoryContainer = document.getElementById("categories-container");

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
categoryContainer?.addEventListener("click", async (e) => {
  const toggleButton = e.target.closest("#category-toggle-button");

  if (toggleButton) {
    const id = toggleButton.getAttribute("data-category-id");
    toggleCategoryExpand(id);

    if (toggleButton.classList.contains("chevron-rotated")) {
      toggleButton.classList.toggle("chevron-rotate-back");

      setTimeout(() => {
        toggleButton.classList.toggle("chevron-rotate-back");
        toggleButton.classList.toggle("chevron-rotated");
      }, 300);
    } else {
      toggleButton.classList.toggle("chevron-rotating");

      setTimeout(() => {
        toggleButton.classList.toggle("chevron-rotating");
        toggleButton.classList.toggle("chevron-rotated");
      }, 300);
    }
  }
});

export const loadCategories = async () => {
  const response = await getTodosByUserIdAndCategory(currentUser.id);

  if (response.success) {
    const todos = response.data;

    for (let category in todos) {
      const group = todos[category];

      const div = document.createElement("div");
      div.dataset.categoryContainerId = category;
      div.classList.add("category-container", "active");

      const categoryHeader = document.createElement("div");
      categoryHeader.classList.add("category-header");
      categoryHeader.innerHTML = `
          <div class="flex items-center gap-1">
            <button
              class="btn btn-icon"
              id="category-toggle-button"
              data-category-id="${category}"
            >
              <i data-lucide="chevron-up"></i>
            </button>
            <h1 class="category-title">${category}</h1>
          </div>
      `;

      categoryContainer.appendChild(categoryHeader);

      group.forEach((groupItem) => {
        const todo = createTodoElement(groupItem);

        div.appendChild(todo);
      });

      categoryContainer.appendChild(div);
      categoryContainer.appendChild(document.createElement("br"));
    }
  }

  lucide.createIcons();
};

console.log(import.meta.url);
