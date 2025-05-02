const url = new URL(window.location.href);
const id = url.searchParams.get("id");

const fetchProductById = async () => {
  const response = await fetch(
    `https://6812782c129f6313e20eb0a7.mockapi.io/products/${id}`
  );
  const data = await response.json();
  return data;
};

const deleteProductById = async () => {
  const response = await fetch(
    `https://6812782c129f6313e20eb0a7.mockapi.io/products/${id}`,
    {
      method: "DELETE",
    }
  );
  const data = await response.json();
  return data;
};

const productName = document.getElementById("product_name");
const productImgWrap = document.getElementById("product_img_wrapper");
const productData = document.getElementById("product_data");
const deleteBtn = document.getElementById("delete_btn");
const message = document.getElementById("message");

const insertProductData = (product) => {
  document.title = `Product: ${product.name}`;

  productName.textContent = product.name;

  const productImg = document.createElement("img");
  productImg.classList.add("product_img");
  productImg.src = product.imgUrl;

  const productPrice = document.createElement("p");
  productPrice.classList.add("product_price");
  productPrice.textContent = `${product.price} \u20AC with TAX`;

  const productLocation = document.createElement("p");
  productLocation.classList.add("product_location");
  productLocation.textContent = `Location: ${product.location}`;

  const productDescription = document.createElement("p");
  productDescription.classList.add("product_description");
  productDescription.textContent = product.description;

  productImgWrap.append(productImg);
  productData.append(productPrice);
  productData.append(productLocation);
  productData.append(productDescription);
};

const buildScreen = async () => {
  const product = await fetchProductById();
  insertProductData(product);
};

buildScreen();

deleteBtn.addEventListener("click", async () => {
  const product = await deleteProductById();

  if (product) {
    message.classList.add("success");
    message.textContent = "Product was deleted from catalog";
  }
});
