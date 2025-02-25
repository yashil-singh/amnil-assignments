const BASE_URL = "https://dummyjson.com";

document.addEventListener("DOMContentLoaded", () => {
  const content = document.getElementById("content");

  const getProducts = async () => {
    content.innerHTML =
      "<span class='text-lg font-semibold text-center col-span-3'>Loading products...</span>";

    try {
      const response = await fetch(`${BASE_URL}/products`);

      const data = await response.json();

      const products = data.products;

      content.innerHTML = "";

      products.forEach((product) => {
        console.log("🚀 ~ script.js:20 ~ product:", product);

        const productCard = document.createElement("div");
        productCard.classList.add("product-card");

        productCard.innerHTML += `
          <img src="${product.thumbnail}" class="size-[300px] object-cover" />
          <div class="flex flex-col gap-2 p-4 border-t border-gray-200 w-full">
            <div>
              <h3 class="font-semibold text-lg line-clamp-1 text-ellipsis">${
                product.title
              }</h3>
              <p class="font-medium">${product.brand ? product?.brand : ""}</p>
              <p class="text-gray-500 capitalize text-ellipsis line-clamp-3 h-[72px]">${
                product.description
              }</p>
            </div>
            <span class="font-bold text-lg">$ ${product.price}</span>

            <div class="flex gap-2">
              ${
                product.tags
                  ? product.tags
                      .map(
                        (tag) =>
                          `<span class="capitalize bg-sky-200 px-2 rounded-2xl text-sky-900 font-medium">${tag}</span>`
                      )
                      .join(" ")
                  : ""
              }
            </div>
          </div>
        `;

        content.appendChild(productCard);
      });
    } catch (error) {
      console.log("🚀 ~ index.js:5 ~ error:", error);
    }
  };

  getProducts();
});
