import {
  amountElement,
  amountInputContainer,
  convertInputContainer,
  customDate,
} from "./index.js";

export const formatDate = (date) => {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  return `${year}-${month}-${day}`;
};

export const validateInputs = (amount, fromCurrency, toCurrency, date) => {
  amountInputContainer.classList.remove("input-error");
  convertInputContainer.classList.remove("input-error");
  customDate.classList.remove("input-error");

  if (!amount) {
    amountElement.focus();
    amountInputContainer.classList.add("input-error");
    throw new Error("Amount to convert is required.");
  }

  const number = parseFloat(amount);

  if (isNaN(number) || number < 1) throw new Error("Invlaid amount.");

  if (fromCurrency === "Select") {
    amountInputContainer.classList.add("input-error");
    throw new Error("Please select a currency.");
  }

  if (toCurrency === "Select") {
    convertInputContainer.classList.add("input-error");
    throw new Error("Please select a currency.");
  }

  if (date) {
    const today = new Date();
    const queryDate = new Date(date);

    if (queryDate > today) {
      customDate.classList.add("input-error");
      throw new Error("Invalid date.");
    }
  }
};
