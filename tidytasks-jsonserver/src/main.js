import { verifyToken } from "@js/api/users";
import { loadUserData } from "@js/auth/getUserData";
import loadIndexTodos from "@js/todos/loadIndexTodos";

const token = localStorage.getItem("token");

if (!token) window.location.href = "/login";

const validToken = await verifyToken(token);

if (!validToken) {
  window.location.href = "/login";
} else {
  if (!validToken.success) {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    window.location.href = "/login";
  } else {
    localStorage.setItem("user", JSON.stringify(validToken.data));
  }
}

// Loading user data;
loadUserData();

// Loading tasks in index page
loadIndexTodos();
