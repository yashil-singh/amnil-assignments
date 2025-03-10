import { editTodoApi } from "@js/api/todos";
import { toastError, toastSuccess } from "@js/ui/toast";
import {
  editTodoCategoryInput,
  editTodoSubmitButton,
  editTodoTitleInput,
} from "@js/todos/todo";
import { closeModal } from "@js/ui/modal";

const titleError = document.getElementById("edit-title-error");

// Reset the form
export const resetEditTodoForm = () => {
  editTodoSubmitButton.disabled = false;
  editTodoSubmitButton.innerText = "Edit";
  titleError.innerText = "";
  editTodoTitleInput.classList.remove("input-error");
};

export const editTodo = async (id) => {
  const title = editTodoTitleInput.value;
  const category = editTodoCategoryInput.value;

  if (!title) {
    editTodoTitleInput.focus();
    editTodoTitleInput.classList.add("input-error");
    titleError.innerText = "Title is required.";
    return;
  }

  editTodoSubmitButton.disabled = true;
  editTodoSubmitButton.innerText = "Editing...";

  const response = await editTodoApi(id, title, category);

  if (response.success) {
    const { title, category } = response.data;

    const titleElement = document.getElementById(`todo-${id}-title`);
    const categoryElement = document.getElementById(`todo-${id}-category`);

    titleElement.innerText = title;

    if (category) {
      categoryElement.innerText = category + " - ";
    }

    toastSuccess(response.message);

    editTodoTitleInput.value = "";
    editTodoCategoryInput.value = "";

    resetEditTodoForm();
    closeModal();
  } else {
    toastError(response.message);
    return null;
  }
};
