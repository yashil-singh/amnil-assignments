const capitalLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const smallLetters = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const specialChars = "!@$()}{[]";

const generatedPasswordElement = document.getElementById("generated-password");
const generatedPasswordStrengthElement = document.getElementById(
  "generated-password-strength",
);

const lengthTextElement = document.getElementById("password-length");
const lengthSliderElement = document.getElementById("length-slider");

const lengthSliderMinusButton = document.getElementById(
  "length-slider-minus-button",
);
const lengthSliderPlusButton = document.getElementById(
  "length-slider-plus-button",
);

const regenerateButton = document.getElementById("regenerate-button");
const copyButton = document.getElementById("copy-button");
const copiedTextElement = document.getElementById("copied-text");

// Use chars checkbox
const checkboxes = document.querySelectorAll(".password-option");

const capitalLettersCheckbox = document.getElementById(
  "capital-letters-checkbox",
);
const smallLettersCheckbox = document.getElementById("small-letters-checkbox");
const numbersCheckbox = document.getElementById("numbers-checkbox");
const specialCharsCheckbox = document.getElementById("special-char-checkbox");

const changePasswordLengthText = (value) => {
  lengthTextElement.innerText = value;
  const percentage =
    ((lengthSliderElement.value - lengthSliderElement.min) /
      (lengthSliderElement.max - lengthSliderElement.min)) *
    100;

  lengthSliderElement.style.background = `linear-gradient(to right, #0057e2 0%, #0057e2 ${percentage}%, #e4e4e7 ${percentage}%, #e4e4e7 100%)`;
};

const setInitialSlider = () => {
  lengthSliderElement.value = 15;
  lengthSliderElement.max = 50;
  lengthSliderElement.min = 1;

  changePasswordLengthText(15);
};

// Helper function to get a random character from a string
function getRandomChar(str) {
  return str[Math.floor(Math.random() * str.length)];
}

const getPasswordStrength = (password) => {
  const length = password.length;
  const hasUpper = /[A-Z]/.test(password);
  const hasLower = /[a-z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[\W_]/.test(password);

  const criteria = [hasUpper, hasLower, hasNumber, hasSpecial].filter(
    (item) => item === true,
  ).length;

  if (length > 25) {
    return { label: "Very Strong", color: "#22c55e" };
  }

  if (length < 4) return { label: "Very Weak", color: "#ef4444" };

  if (length < 8) return { label: "Weak", color: "#f97316" };

  if (length < 10 || criteria === 1) return { label: "Good", color: "#fed7aa" };
  if (length < 15 || criteria === 2)
    return { label: "Strong", color: "#d5f2a5" };

  return { label: "Very Strong", color: "#22c55e" };
};

const generatePassword = () => {
  const length = lengthSliderElement.value;
  const includeCapitalLetters = capitalLettersCheckbox.checked;
  const includeSmallLetters = smallLettersCheckbox.checked;
  const includeNumbers = numbersCheckbox.checked;
  const includeSpecialChars = specialCharsCheckbox.checked;

  let charsAllowed = "";
  let password = [];

  if (includeCapitalLetters) {
    charsAllowed += capitalLetters;
  }
  if (includeSmallLetters) {
    charsAllowed += smallLetters;
  }
  if (includeNumbers) {
    charsAllowed += numbers;
  }
  if (includeSpecialChars) {
    charsAllowed += specialChars;
  }

  while (password.length < length) {
    password.push(getRandomChar(charsAllowed));
  }

  const finalPassword = password.join("");
  generatedPasswordElement.innerText = finalPassword;

  const strength = getPasswordStrength(finalPassword);
  generatedPasswordStrengthElement.innerText = strength.label;
  generatedPasswordStrengthElement.style.backgroundColor = strength.color;
};

// Copy to clipboard
copyButton.addEventListener("click", () => {
  navigator.clipboard.writeText(generatedPasswordElement.innerText).then(() => {
    if (copiedTextElement.classList.contains("active")) {
      return;
    }

    copiedTextElement.classList.add("active");

    setTimeout(() => {
      copiedTextElement.classList.add("closing");
      setTimeout(() => {
        copiedTextElement.classList.remove("active", "closing");
      }, 300);
    }, 3000);
  });
});

lengthSliderElement.oninput = (e) => {
  changePasswordLengthText(e.target.value);

  generatePassword();
};

// Lower password length
lengthSliderMinusButton.addEventListener("click", () => {
  lengthSliderElement.value -= 1;
  changePasswordLengthText(lengthSliderElement.value);

  generatePassword();
});

// Increase password length
lengthSliderPlusButton.addEventListener("click", () => {
  const value = Number(lengthSliderElement.value);
  lengthSliderElement.value = value + 1;
  changePasswordLengthText(lengthSliderElement.value);
  generatePassword();
});

checkboxes.forEach((checkbox) => {
  checkbox.addEventListener("change", (e) => {
    const checkedCheckboxes = Array.from(checkboxes).filter((cb) => cb.checked);

    if (checkedCheckboxes.length === 0) {
      e.target.checked = true;
    }

    generatePassword();
  });
});

regenerateButton.addEventListener("click", generatePassword);

setInitialSlider();

generatePassword();
