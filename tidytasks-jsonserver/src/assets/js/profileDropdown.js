const profileDropdownButton = document.getElementById("profile-dropdown-btn");
const profileDropdownContainer = document.querySelector(
  ".profile-dropdown-container",
);

let isDropdownOpen = false;

const openProfileDropdown = () => {
  profileDropdownContainer.classList.add("active");
  document.body.style.overflow = "hidden";
  isDropdownOpen = true;
};

const closeProfileDropdown = () => {
  profileDropdownContainer.classList.add("closing");

  setTimeout(() => {
    profileDropdownContainer.classList.remove("active", "closing");
    isDropdownOpen = false;
  }, 300);

  document.body.style.overflow = "auto";
};

profileDropdownButton.addEventListener("click", (e) => {
  e.stopPropagation();

  if (!isDropdownOpen) {
    openProfileDropdown();
  } else {
    closeProfileDropdown();
  }
});

document.addEventListener("click", () => {
  if (isDropdownOpen) {
    closeProfileDropdown();
  }
});
