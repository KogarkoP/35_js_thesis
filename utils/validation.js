export const formValidation = async (data) => {
  if (isNaN(data.price)) {
    alert("Product price should be a number");
    return;
  }

  if (
    !data.name.trim() ||
    !data.description.trim() ||
    !data.imgUrl.trim() ||
    !data.location ||
    !data.price
  ) {
    alert("Please fill in all fields");
    return;
  }

  const imgUrlRegex =
    /^https?:\/\/.*\.(jpg|jpeg|png|gif|webp|bmp|svg)(\?.*)?$/i;

  if (!imgUrlRegex.test(data.imgUrl)) {
    alert("Please insert correct image url");
    return;
  }
};
