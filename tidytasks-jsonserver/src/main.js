import { verifyToken } from "@js/api/users";
import { loadUserData } from "@js/auth/getUserData";
import { toastError } from "@js/ui/toast";

// Checking for token in localstorage
const token = localStorage.getItem("token");

const verify = async () => {
  const validToken = await verifyToken(token);

  if (!validToken) {
    window.location.href = "/login";
  } else {
    if (!validToken.success) {
      toastError("You have been logged out.");

      setTimeout(() => {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        window.location.href = "/login";
      }, 1000);
    } else {
      // Setting user data in local storage
      localStorage.setItem("user", JSON.stringify(validToken.data));
      // Loading user data;
      loadUserData();
    }
  }
};

if (!token) {
  window.location.href = "/login";
} else {
  // Verifying token
  verify();
}
