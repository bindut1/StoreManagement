const express = require("express");
const router = express.Router();

const controller = require("../../controllers/admin/product.controller");

router.get("/", controller.index);
//su dung PATCH thay the cho GET de khi user truy cap link online khong the cap nhat duoc, boi vi khi dung GET user co the dung link online de cap nhat
//tren trinh duyet phuong thuc mac dinh la phuong thuc GET
router.patch("/change-status/:status/:id", controller.changeStatus);
router.patch("/change-multi", controller.changeMulti);

module.exports = router;