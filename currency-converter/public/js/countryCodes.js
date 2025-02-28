import { fetchData } from "./api.js";
import { errorMessage } from "./index.js";

export const currencyFromSelector = document.getElementById("country-from");
export const currencyToSelector = document.getElementById("country-to");

const fetchCurrencyList = async () => {
  const response = await fetchData();

  const data = response.data[0];
  const rates = data.rates;

  let countries = [];

  rates.forEach((rate) => {
    const currency = rate.currency;
    countries.push(currency.iso3);
  });

  return countries;
};

const createCurrencyOption = (currencies, element) => {
  const nprOption = document.createElement("option");
  nprOption.value = "NPR";
  nprOption.textContent = "NPR";
  element.appendChild(nprOption);

  currencies.forEach((currency) => {
    const option = document.createElement("option");
    option.value = currency;
    option.textContent = currency;

    element.appendChild(option);
  });
};

export const populateContryCode = async () => {
  try {
    const currencies = await fetchCurrencyList();
    createCurrencyOption(currencies, currencyFromSelector);
    createCurrencyOption(currencies, currencyToSelector);
  } catch (error) {
    errorMessage.innerText = "Error fetching currencies. Try refreshing.";
    return;
  }
};

export const getCurrencyFromValue = () => {
  return currencyFromSelector.value;
};

export const getCurrecnyToValue = () => {
  return currencyToSelector.value;
};
