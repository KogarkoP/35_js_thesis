import { fetchProductById, deleteProductById } from "../utils/fetch.js";

const url = new URL(window.location.href);
const id = url.searchParams.get("id");

const productName = document.getElementById("product_name");
const productImgWrap = document.getElementById("product_img_wrapper");
const productData = document.getElementById("product_data");
const message = document.createElement("h3");
const deleteBtn = document.createElement("button");
const backToCatalogBtn = document.createElement("button");

const insertProductData = (product) => {
  document.title = `Product: ${product.name}`;

  productName.textContent = product.name;

  const productImg = document.createElement("img");
  productImg.classList.add("product_img");
  productImg.src = product.imgUrl;

  const productPrice = document.createElement("p");
  productPrice.classList.add("product_price");
  const withTax = document.createElement("span");
  withTax.classList.add("with_tax");
  withTax.textContent = "with TAX";
  productPrice.textContent = `${product.price} \u20AC`;

  const productLocation = document.createElement("p");
  productLocation.classList.add("product_location");
  productLocation.textContent = `Location: ${product.location}`;

  const productDescription = document.createElement("p");
  productDescription.classList.add("product_description");
  productDescription.textContent = product.description;

  message.classList.add("message");

  deleteBtn.classList.add("delete_btn");
  deleteBtn.textContent = "Delete product";

  backToCatalogBtn.textContent = "Back to the catalog";

  productImgWrap.append(productImg);
  productData.append(productPrice);
  productPrice.append(withTax);
  productData.append(productLocation);
  productData.append(productDescription);
  productData.append(message);
  productData.append(deleteBtn);
  productData.append(backToCatalogBtn);
};

const buildScreen = async () => {
  const product = await fetchProductById(id);
  insertProductData(product);
};

buildScreen();

deleteBtn.addEventListener("click", async () => {
  const product = await deleteProductById(id);

  if (product) {
    message.classList.add("success");
    message.textContent = "Product was deleted from catalog";
  }
});

backToCatalogBtn.addEventListener("click", () => {
  window.location.replace("../index.html");
});
