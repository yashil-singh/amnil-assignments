import { createTodoApi } from "@js/api/todos";
import { toastError, toastSuccess } from "@js/toast";
import { addTodoCategoryInput, addTodoTitleInput } from "@js/todo";
import { closeModal } from "@js/todoModal";
import { format } from "date-fns";

export const createTodoElement = (
  id,
  title,
  category,
  isCompleted,
  createdAt,
) => {
  const formatedDate = format(
    new Date(createdAt),
    "iii, do MMM yyyy, h:mm aaa",
  );

  const div = document.createElement("div");
  div.classList.add("todo-container", "active");
  div.setAttribute("data-todo-id", id);

  div.innerHTML = `
    <div class="todo-details">
      <!-- Checkbox -->
  
        <input
          type="checkbox"
          ${isCompleted && "checked"}
          class="size-6 toggle-checkbox"
          id="complete-toggle-button-${id}"
          data-id="${id}"
        />
  
  
      <div class="flex flex-col">
        <span data-id-title=${id} class="todo-title ${isCompleted && "done"}">${title}</span>
        <span class="text-muted text-sm">
          ${category && `${category} - `}${formatedDate}
        </span>
      </div>
    </div>
  
    <div class="flex">
      <!-- Open Delete Todo Modal Button -->
      <button
        class="btn btn-ghost-destructive delete-todo"
        id="delete-todo-modal-open-button-${id}"
        data-id="${id}"
      >
        <i data-lucide="trash-2" class="size-5"></i>
      </button>
    </div>`;

  return div;
};

const createTodo = async (title, category) => {
  const response = await createTodoApi(title, category);

  if (response.success) {
    toastSuccess(response.message);

    addTodoTitleInput.value = "";
    addTodoCategoryInput.value = "";

    closeModal();

    const {
      id,
      title: taskTitle,
      category: taskCategory,
      isCompleted,
      createdAt,
    } = response.data;

    const todo = createTodoElement(
      id,
      taskTitle,
      taskCategory,
      isCompleted,
      createdAt,
    );

    return todo;
  } else {
    toastError(response.message);
  }
};

export default createTodo;
