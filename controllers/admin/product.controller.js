
const Product = require("../../models/product.model");

const filterStatusHelper = require("../../helpers/filterstatus");

const searchHelper = require("../../helpers/search");

// [GET] /admin/products

module.exports.index = async (req, res) => {
    console.log(req.query.status);
    let find = {
        // deleted: false
    };
    
    const filterStatus = filterStatusHelper(req.query);
    
    if (req.query.status) {
        find.status = req.query.status;
    }

    const objSearch = searchHelper(req.query);
    if(objSearch.regex){
        find.title = objSearch.regex;
    }

    const products = await Product.find(find);

    console.log(products);

    res.render("admin/pages/products/index", {
        pageTitle: "Danh sach san pham",
        products: products,
        filterStatus: filterStatus,
        keyword: objSearch.keyword
    });
}