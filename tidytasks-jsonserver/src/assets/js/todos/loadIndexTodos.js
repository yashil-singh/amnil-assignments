import { getTodosByUserIdApi } from "@js/api/todos";
import { createTodoElement } from "./createTodo";
import { todosContainer } from "@js/todo";

export const removeTask = (id) => {
  const task = document.querySelector(`[data-todo-id='${id}']`);

  task.remove();
};

const loadTodos = async () => {
  todosContainer.innerText = "Loading...";
  const { data: todos } = await getTodosByUserIdApi();

  todosContainer.innerText = "";

  todos.forEach((todo) => {
    const { id, title, category, isCompleted, createdAt } = todo;

    const todoElement = createTodoElement(
      id,
      title,
      category,
      isCompleted,
      createdAt,
    );
    todosContainer.appendChild(todoElement);
  });

  if (todos.length < 1) {
    todosContainer.innerText = "No tasks added yet.";
  }

  lucide.createIcons();
};

export default loadTodos;
