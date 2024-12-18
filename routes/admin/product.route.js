const express = require("express");
const multer = require("multer");

const router = express.Router();
// const storageMulter = require("../../helpers/storageMulter");
// const upload = multer({ storage: storageMulter() });
const upload = multer();
const validate = require("../../validates/admin/product.validate");
const controller = require("../../controllers/admin/product.controller");

const uploadCloud = require("../../middlewares/admin/uploadCloud.middleware");

router.get("/", controller.index);
//su dung PATCH thay the cho GET de khi user truy cap link online khong the cap nhat duoc, boi vi khi dung GET user co the dung link online de cap nhat
//tren trinh duyet phuong thuc mac dinh la phuong thuc GET
router.patch("/change-status/:status/:id", controller.changeStatus);
router.patch("/change-multi", controller.changeMulti);
router.delete("/delete/:id", controller.deleteItem);
router.get("/create", controller.create);
router.post(
  "/create",
  upload.single("thumbnail"),
  uploadCloud.upload,
  validate.createPost,
  controller.createPost
);
router.get("/edit/:id", controller.edit);
router.patch(
  "/edit/:id",
  upload.single("thumbnail"),
  uploadCloud.upload,
  validate.createPost,
  controller.editPatch
);
router.get("/detail/:id", controller.detail);

module.exports = router;
