module.exports = (objPagination, query, countProduct) => {
  if (query.page) {
    objPagination.currentPage = parseInt(query.page);
  }
  //bo qua n san pham
  objPagination.skip =
    (objPagination.currentPage - 1) * objPagination.limitItem;
  const totalPage = Math.ceil(countProduct / objPagination.limitItem);
  objPagination.totalPage = totalPage;
  // console.log(totalPage);
  // console.log(countProduct);
  return objPagination;
};
