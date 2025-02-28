import { fetchData } from "./api.js";
import { validateInputs } from "./utils.js";

export const convertCurrency = async (
  amount,
  fromCurrency,
  toCurrency,
  date
) => {
  // Validating inputs
  validateInputs(amount, fromCurrency, toCurrency, date);

  // Checking if same currency
  if (fromCurrency === toCurrency) {
    return {
      amount: parseFloat(amount).toFixed(3),
      exchangeRate: `1 ${fromCurrency} = 1 ${toCurrency}`,
    };
  }

  let convertedAmount;
  let exchangeRate;

  const response = await fetchData(date);

  if (!response.success) throw new Error(response.error);

  const data = response.data[0];
  const rates = data.rates; // get rates

  const from = rates.find((rate) => rate?.currency.iso3 === fromCurrency); // return selected from currency
  const to = rates.find((rate) => rate?.currency.iso3 === toCurrency); // return selected to currency

  const rateFrom = from?.buy / from?.currency.unit; // rate per unit
  const rateTo = to?.buy / to?.currency.unit; // rate per unit

  const amountInNpr = amount * parseFloat(rateFrom); // converted amount in npr

  if (fromCurrency === "NPR") {
    convertedAmount = amount / rateTo;
    exchangeRate = (1 / rateTo).toFixed(3);
  } else if (toCurrency === "NPR") {
    convertedAmount = amount * rateFrom;
    exchangeRate = rateFrom.toFixed(3);
  } else {
    convertedAmount = amountInNpr / parseFloat(rateTo);
    exchangeRate = (rateFrom / rateTo).toFixed(3);
  }

  return {
    amount: convertedAmount.toFixed(3),
    exchangeRate: `1 ${fromCurrency} = ${exchangeRate} ${toCurrency}`,
  };
};
