module.exports = (query) => {
  let objSearch = {
    keyword: "",
  };

  if (query.keyword) {
    objSearch.keyword = query.keyword;
    //dung de tim kiem tuong tu nhu LIKE trong SQL, i la de khong phan biet hoa thuong
    const regex = new RegExp(objSearch.keyword, "i");
    objSearch.regex = regex;
  }
  return objSearch;
};
