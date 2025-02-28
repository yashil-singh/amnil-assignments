import { formatDate } from "./utils.js";

const BASE_URL = "https://www.nrb.org.np/api";

export const fetchData = async (queryDate) => {
  let date = queryDate;

  if (!queryDate) {
    const today = new Date();
    date = formatDate(today);
  }
  const response = await fetch(
    `${BASE_URL}/forex/v1/rates?per_page=1&page=1&from=${date}&to=${date}`,
    {
      method: "GET",
    }
  );

  if (response.ok) {
    const data = await response.json();

    if (data.status.code === 200) {
      const payload = data.data.payload;
      return { success: true, data: payload };
    }
  }

  return { success: false, error: "Error converting data." };
};
