module.exports = (query) => {
  let filtersStatus = [
    {
      name: "Tat ca",
      status: "",
      class: "",
    },
    {
      name: "Hoat dong",
      status: "active",
      class: "",
    },
    {
      name: "Dung hoat dong",
      status: "inactive",
      class: "",
    },
  ];
  if (query.status) {
    const index = filtersStatus.findIndex(
      (item) => item.status == query.status
    );
    filtersStatus[index].class = "active";
  } else {
    const index = filtersStatus.findIndex((item) => item.status == "");
    filtersStatus[index].class = "active";
  }
  return filtersStatus;
};
