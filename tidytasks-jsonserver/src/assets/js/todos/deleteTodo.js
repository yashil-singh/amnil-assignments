import { deleteTodoApi } from "@js/api/todos";
import { removeTask } from "./loadIndexTodos";
import { toastSuccess } from "@js/toast";
import { closeModal, deleteTodoModal } from "@js/todoModal";

const deleteTodo = async (id) => {
  const response = await deleteTodoApi(id);

  if (response.success) {
    removeTask(id);
    toastSuccess(response.message);
  }

  closeModal(deleteTodoModal);
};

export default deleteTodo;
