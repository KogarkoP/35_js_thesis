const productUrl = "https://6812782c129f6313e20eb0a7.mockapi.io/products/";

export const fetchProducts = async () => {
  const response = await fetch(productUrl);
  const data = response.json();
  return data;
};

export const insertProduct = async (data) => {
  const response = await fetch(productUrl, {
    method: "POST",
    body: JSON.stringify(data),
    headers: { "content-type": "application/json" },
  });
  const products = await response.json();
  return products;
};

export const fetchProductById = async (id) => {
  const response = await fetch(productUrl + id);
  const data = await response.json();
  return data;
};

export const deleteProductById = async (id) => {
  const response = await fetch(productUrl + id, {
    method: "DELETE",
  });
  const data = await response.json();
  return data;
};
