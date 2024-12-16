const Product = require("../../models/product.model");
const filterStatusHelper = require("../../helpers/filterstatus");
const searchHelper = require("../../helpers/search");
const paginationHelper = require("../../helpers/pagination");
const systemConfig = require("../../config/system");

// [GET] /admin/products
module.exports.index = async (req, res) => {
  console.log(req.query.status);
  // console.log("I'm here");
  let find = {
    deleted: false,
  };

  const filterStatus = filterStatusHelper(req.query);
  if (req.query.status) {
    find.status = req.query.status;
  }

  const objSearch = searchHelper(req.query);
  if (objSearch.regex) {
    find.title = objSearch.regex;
  }
  //Pagination
  const countProduct = await Product.countDocuments(find);
  let objPagination = paginationHelper(
    {
      currentPage: 1,
      limitItem: 4,
    },
    req.query,
    countProduct
  );
  //End Pagination

  const products = await Product.find(find)
    .sort({ position: "desc" })
    .limit(objPagination.limitItem)
    .skip(objPagination.skip);

  // console.log(products);

  res.render("admin/pages/products/index", {
    pageTitle: "Danh sach san pham",
    products: products,
    filterStatus: filterStatus,
    keyword: objSearch.keyword,
    pagination: objPagination,
  });
};

// [PATCH] /admin/products/change-status/:status/:id
module.exports.changeStatus = async (req, res) => {
  const status = req.params.status;
  const id = req.params.id;
  // console.log(status + " " + id);
  await Product.updateOne({ _id: id }, { status: status });
  req.flash("success", "Cap nhat trang thai thanh cong!");
  res.redirect("back");
  // res.send(`${status} - ${id}`);
};

// [PATCH] /admin/products/change-multi
module.exports.changeMulti = async (req, res) => {
  const type = req.body.type;
  const ids = req.body.ids.split(", ");
  switch (type) {
    case "active":
      await Product.updateMany({ _id: { $in: ids } }, { status: "active" });
      req.flash(
        "success",
        `Cap nhat trang thai cua ${ids.length} san pham thanh cong`
      );
      break;
    case "inactive":
      await Product.updateMany({ _id: { $in: ids } }, { status: "inactive" });
      req.flash(
        "success",
        `Cap nhat trang thai cua ${ids.length} san pham thanh cong`
      );
      break;
    case "delete-all":
      await Product.updateMany(
        { _id: { $in: ids } },
        { deleted: true, deletedAt: new Date() }
      );
      req.flash("success", `Xoa ${ids.length} san pham thanh cong`);
      break;
    case "change-position":
      for (const item of ids) {
        let [id, position] = item.split("-");
        position = parseInt(position);
        await Product.updateOne({ _id: id }, { position: position });
      }
      req.flash("success", `Thay doi ${ids.length} san pham thanh cong`);
      break;
    default:
      break;
  }
  res.redirect("back");
};

// [DELETE] /admin/products/delete/:id
module.exports.deleteItem = async (req, res) => {
  const id = req.params.id;
  // await Product.deleteOne({ _id: id });
  await Product.updateOne(
    { _id: id },
    { deleted: true, deletedAt: new Date() }
  );
  req.flash("success", `Xoa san pham thanh cong`);
  res.redirect("back");
};

// [GET] /admin/products/create
module.exports.create = async (req, res) => {
  res.render("admin/pages/products/create", {
    pageTitle: "Them moi san pham",
  });
};

// [POST] /admin/products/create
module.exports.createPost = async (req, res) => {
  req.body.price = parseInt(req.body.price);
  req.body.discountPercentage = parseInt(req.body.discountPercentage);
  req.body.stock = parseInt(req.body.stock);
  if (req.body.position == "") {
    req.body.position = (await Product.countDocuments()) + 1;
    // console.log(req.body.position);
  } else {
    req.body.position = parseInt(req.body.position);
  }
  req.body.thumbnail = `/uploads/${req.file.filename}`;
  const product = new Product(req.body);
  await product.save();
  res.redirect(`${systemConfig.prefixAdmin}/products`);
};
