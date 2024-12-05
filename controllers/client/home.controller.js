// [GET] /
module.exports.index = (req, res) => {
  res.render("client/pages/home/index", {
    pageTitle: "Trang chu",
    msg: "Met qua, nghi ngoi thoiiiiiiii",
  });
};
