import { createTodoApi } from "@js/api/todos";
import { toastError, toastSuccess } from "@js/ui/toast";
import {
  addTodoCategoryInput,
  addTodoSubmitButton,
  addTodoTitleInput,
  createTodoElement,
} from "@js/todos/todo";
import { closeModal } from "@js/ui/modal";

const titleError = document.getElementById("title-error");

// Reset the form
export const resetAddTodoForm = () => {
  addTodoSubmitButton.disabled = false;
  addTodoSubmitButton.innerText = "Add";
  titleError.innerText = "";
  addTodoTitleInput.classList.remove("input-error");
};

export const createTodo = async () => {
  const title = addTodoTitleInput.value;
  const category = addTodoCategoryInput.value;

  if (!title) {
    addTodoTitleInput.focus();
    addTodoTitleInput.classList.add("input-error");
    titleError.innerText = "Title is required.";
    return;
  }

  addTodoSubmitButton.disabled = true;
  addTodoSubmitButton.innerText = "Adding...";

  const response = await createTodoApi(title, category);

  if (response.success) {
    toastSuccess(response.message);

    addTodoTitleInput.value = "";
    addTodoCategoryInput.value = "";

    resetAddTodoForm();
    closeModal();

    const todo = createTodoElement(response.data);

    return todo;
  } else {
    toastError(response.message);
    return null;
  }
};
