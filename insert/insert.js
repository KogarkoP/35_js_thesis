const productName = document.getElementById("product_name");
const productPrice = document.getElementById("product_price");
const productImage = document.getElementById("img_url");
const productLocation = document.getElementById("product_locations");
const productDescription = document.getElementById("product_description");
const insertButton = document.getElementById("insert_product");
const message = document.getElementById("message");

const insertProduct = async (data) => {
  const response = await fetch(
    "https://6812782c129f6313e20eb0a7.mockapi.io/products",
    {
      method: "POST",
      body: JSON.stringify(data),
      headers: { "content-type": "application/json" },
    }
  );
  const products = await response.json();
  return products;
};

insertButton.addEventListener("click", async () => {
  const price = Number(productPrice.value.replace(",", "."));

  const data = {
    name: productName.value,
    price: Number(price.toFixed(2)),
    description: productDescription.value,
    imgUrl: productImage.value,
    location: productLocation.value,
  };

  if (
    !data.name.trim() ||
    !data.description.trim() ||
    productPrice.value.trim() === "" ||
    !data.imgUrl.trim() ||
    !data.location
  ) {
    alert("Please fill in all fields");
    return;
  }

  if (isNaN(data.price)) {
    alert("Product price should be a number");
    return;
  } else if (data.price === 0) {
    alert("Product price can't be equal 0");
    return;
  }

  const imgUrlRegex =
    /^https?:\/\/.*\.(jpg|jpeg|png|gif|webp|bmp|svg)(\?.*)?$/i;

  if (!imgUrlRegex.test(data.imgUrl)) {
    alert("Please insert correct image url");
    return;
  }

  const product = await insertProduct(data);

  if (product) {
    message.classList.add("success");
    message.textContent = "Product was added successfully to the shop";
  }
});
