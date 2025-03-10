import { BASE_URL } from "../utils/constants";
import response from "../utils/response";

export const createTodo = async (id, title, category) => {
  try {
    if (!title) throw new Error("Title is required.");

    if (title.trim().length < 1) throw new Error("Title is required.");

    const usersResponse = await fetch(`${BASE_URL}/users/${id}`);
    const user = await usersResponse.json();

    if (!user) throw new Error("User not found.");

    const todosResponse = await fetch(`${BASE_URL}/todos`);
    const todos = await todosResponse.json();

    const maxId =
      Number(todos.reduce((max, todo) => (todo.id > max ? todo.id : max), 0)) +
      1;

    const body = {
      id: maxId.toString(),
      title,
      category: category ?? null,
      createdAt: new Date(),
      userId: id,
      isCompleted: false,
    };

    const createResponse = await fetch(`${BASE_URL}/todos`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(body),
    });

    if (!createResponse.ok)
      throw new Error("Something went wrong. Please try again.");

    return response(true, "Todo created.", body);
  } catch (error) {
    return response(false, error.message);
  }
};

export const getTodosByUserId = async (id) => {
  try {
    const todosResponse = await fetch(`${BASE_URL}/todos`);
    const todos = await todosResponse.json();

    const filtered = todos.filter(
      (todo) => todo.userId.toString() === id.toString(),
    );

    return response(true, "", filtered);
  } catch (error) {
    return response(false, error.message);
  }
};

export const updateTodo = async (id, title, category) => {
  try {
    if (!id) throw new Error("Todo ID is required.");
    if (!title || title.trim().length < 1)
      throw new Error("Title is required.");

    const todoResponse = await fetch(`${BASE_URL}/todos/${id}`);
    if (!todoResponse.ok) throw new Error("Todo not found.");

    const updatedTodo = {
      title,
      category: category ?? null,
      updatedAt: new Date(),
    };

    const updateResponse = await fetch(`${BASE_URL}/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    });

    if (!updateResponse.ok) throw new Error("Failed to update todo.");

    return response(true, "Todo updated.", { id, ...updatedTodo });
  } catch (error) {
    return response(false, error.message);
  }
};

export const deleteTodo = async (id) => {
  try {
    if (!id) throw new Error("Todo ID is required.");

    const deleteResponse = await fetch(`${BASE_URL}/todos/${id}`, {
      method: "DELETE",
    });

    if (!deleteResponse.ok) throw new Error("Failed to delete todo.");

    return response(true, "Todo deleted.");
  } catch (error) {
    return response(false, error.message);
  }
};

export const toggleTodoComplete = async (id) => {
  try {
    if (!id) throw new Error("Todo ID is required.");

    const todoResponse = await fetch(`${BASE_URL}/todos/${id}`);
    if (!todoResponse.ok) throw new Error("Todo not found.");

    const todo = await todoResponse.json();

    const updatedTodo = {
      isCompleted: !todo.isCompleted,
    };

    const updateResponse = await fetch(`${BASE_URL}/todos/${id}`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedTodo),
    });

    if (!updateResponse.ok) throw new Error("Failed to update todo.");

    return response(true, "Todo toggled.", { id, ...updatedTodo });
  } catch (error) {
    return response(false, error.message);
  }
};
