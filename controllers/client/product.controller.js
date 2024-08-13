const Product = require("../../models/product.model");
// [GET] /product
module.exports.index = async (req, res) => {
  const products = await Product.find({
    status: "active",
    deleted: false,
  });

  // products.forEach(item => {
  //     item.priceNew = (item.price*(100 - item.discountPercentage)/100).toFixed(0);
  // });

  const newProducts = products.map((item) => {
    item.priceNew = (
      (item.price * (100 - item.discountPercentage)) /
      100
    ).toFixed(0);
    return item;
  });

  console.log(products);
  res.render("client/pages/products/index", {
    pageTitle: "Trang danh sach san pham",
    products: newProducts,
  });
};
