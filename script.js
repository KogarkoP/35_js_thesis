const fetchProducts = async () => {
  const response = await fetch(
    "https://6812782c129f6313e20eb0a7.mockapi.io/products"
  );
  const data = response.json();
  return data;
};

const buildCards = (products) => {
  const productWrapper = document.getElementById("product_wrapper");

  [...products]
    .sort((a, b) => {
      return a.price > b.price ? 1 : -1;
    })
    .forEach((product) => {
      const productCard = document.createElement("a");
      productCard.href = `./product/product.html?id=${product.id}`;
      productCard.classList.add("card");

      const productImgWrapper = document.createElement("div");
      productImgWrapper.classList.add("img_wrapper");

      const productImg = document.createElement("img");
      productImg.classList.add("product_img");
      productImg.src = product.imgUrl;

      const productName = document.createElement("h3");
      productName.classList.add("product_name");
      productName.textContent = product.name;

      const productPrice = document.createElement("span");
      productPrice.classList.add("product_price");
      productPrice.textContent = `${product.price} \u20AC`;

      productWrapper.append(productCard);
      productCard.append(productImgWrapper);
      productImgWrapper.append(productImg);
      productCard.append(productName);
      productCard.append(productPrice);
    });
};

const initProductPage = async () => {
  const productData = await fetchProducts();
  buildCards(productData);
};

initProductPage();
