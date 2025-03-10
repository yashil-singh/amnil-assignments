import { signup } from "@js/api/users";
import { toastError, toastSuccess } from "@js/toast";

const fullName = document.getElementById("fullName");
const username = document.getElementById("username");
const password = document.getElementById("password");

const submitButton = document.getElementById("signup-button");

submitButton.addEventListener("click", async (e) => {
  e.preventDefault();

  submitButton.disabled = true;
  submitButton.innerText = "Signing up...";

  const response = await signup(fullName.value, username.value, password.value);

  if (response.success) {
    toastSuccess(response.message);

    fullName.value = "";
    username.value = "";
    password.value = "";

    setTimeout(() => {
      const token = response.data.token;
      const user = response.data.user;

      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      window.location.href = "/";
    }, 1000);
  } else {
    toastError(response.message);
  }

  submitButton.disabled = false;
  submitButton.innerText = "Sign up";
});
