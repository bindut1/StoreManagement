
const Product = require("../../models/product.model");


// [GET] /admin/products

module.exports.index = async (req, res) => {
    console.log(req.query.status);
    let find = {
        // deleted: false
    };
    let filtersStatus = [
        {
            name: "Tat ca",
            status: "",
            class: ""
        },
        {
            name: "Hoat dong",
            status: "active",
            class: ""
        },
        {
            name: "Dung hoat dong",
            status: "inactive",
            class: ""
        }
    ];
    if (req.query.status) {
        const index = filtersStatus.findIndex(item => item.status == req.query.status);
        filtersStatus[index].class = "active";
    }
    else {
        const index = filtersStatus.findIndex(item => item.status == "");
        filtersStatus[index].class = "active";
    }
    if (req.query.status) {
        find.status = req.query.status;
    }

    let keyword = "";
    if (req.query.keyword) {
        keyword = req.query.keyword;
        const regex = new RegExp(keyword, "i");
        find.title = regex;
    }

    const products = await Product.find(find);

    console.log(products);

    res.render("admin/pages/products/index", {
        pageTitle: "Danh sach san pham",
        products: products,
        filtersStatus: filtersStatus,
        keyword: keyword
    });
}