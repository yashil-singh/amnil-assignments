import { convertCurrency } from "./convert.js";
import {
  currencyFromSelector,
  currencyToSelector,
  getCurrecnyToValue,
  getCurrencyFromValue,
  populateContryCode,
} from "./countryCodes.js";

// Conversion related elements
export const amountElement = document.getElementById("amount");
const convertedTo = document.getElementById("converted-to");
export const customDate = document.getElementById("custom-date");

// Error related elements
export const errorMessage = document.getElementById("error-message");
export const amountInputContainer = document.getElementById(
  "amount-input-container"
);
export const convertInputContainer = document.getElementById(
  "convert-input-container"
);

// Range related elements
const rangeSelector = document.getElementById("range-selector");
const customDateContainer = document.getElementById("custom-date-container");

// Exhange rate related elements
const exchangeRateContainer = document.getElementById(
  "exchange-rate-contianer"
);
const exhangeRateDisplay = document.getElementById("exchange-rate");

const convert = async (amount, fromCurrency, toCurrency, date) => {
  // reset error message
  errorMessage.innerText = "";

  // Loading state
  convertButton.innerHTML = "Converting...";
  convertButton.disabled = true;

  try {
    const { amount: convertedAmount, exchangeRate } = await convertCurrency(
      amount,
      fromCurrency,
      toCurrency,
      date
    );

    // Update converted amount in input
    convertedTo.value = convertedAmount;

    // Update exchange rate
    exchangeRateContainer.style.display = "flex";
    exhangeRateDisplay.innerText = exchangeRate;
  } catch (error) {
    // Update error
    errorMessage.innerText = error.message;
  } finally {
    // Update loading state
    convertButton.innerHTML = "Convert";
    convertButton.disabled = false;
  }
};

// Convert button
const convertButton = document.getElementById("convert-button");

convertButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const amountToConvert = amountElement.value;
  const date = customDate.value;
  const fromCurrency = getCurrencyFromValue();
  const toCurrency = getCurrecnyToValue();

  convert(amountToConvert, fromCurrency, toCurrency, date);
});

// Switch button
const switchButton = document.getElementById("switch-button");

switchButton.addEventListener("click", async (e) => {
  e.preventDefault();

  const amountToConvert = amountElement.value;
  const date = customDate.value;

  const switchedFormCurrency = getCurrecnyToValue();
  const switchedToCurrency = getCurrencyFromValue();

  currencyFromSelector.value = switchedFormCurrency;
  currencyToSelector.value = switchedToCurrency;

  convert(amountToConvert, switchedFormCurrency, switchedToCurrency, date);
});

// Range Selector
rangeSelector.addEventListener("change", () => {
  customDateContainer.style.display =
    rangeSelector.value === "Custom" ? "flex" : "none";
});

populateContryCode();
