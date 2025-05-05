import { insertProduct } from "../utils/fetch.js";
import { formValidation } from "../utils/validation.js";

const productName = document.getElementById("product_name");
const productPrice = document.getElementById("product_price");
const productImage = document.getElementById("img_url");
const productLocation = document.getElementById("product_locations");
const productDescription = document.getElementById("product_description");
const insertButton = document.getElementById("insert_product");
const message = document.getElementById("message");

insertButton.addEventListener("click", async () => {
  const price = Number(productPrice.value.replace(",", "."));

  const data = {
    name: productName.value,
    price: Number(price.toFixed(2)),
    description: productDescription.value,
    imgUrl: productImage.value,
    location: productLocation.value,
  };

  const isValidationError = formValidation(data);

  if (isValidationError) {
    return;
  }

  const product = await insertProduct(data);

  if (product) {
    message.classList.add("success");
    message.textContent = "Product was added successfully to the shop";
  }
});
