// Start ButtonsStatus
const buttonsStatus = document.querySelectorAll("[button-status]");
// console.log(buttonsStatus);
if (buttonsStatus.length > 0) {
  let url = new URL(window.location.href);
  console.log(url.href);
  buttonsStatus.forEach((button) => {
    button.addEventListener("click", () => {
      const status = button.getAttribute("button-status");
      if (status) {
        url.searchParams.set("status", status);
      } else {
        url.searchParams.delete("status");
      }
      window.location.href = url.href;
    });
  });
}
// End ButtonsStatus

// Form Search
const formSearch = document.querySelector("#form-search");
if (formSearch) {
  let url = new URL(window.location.href);
  formSearch.addEventListener("submit", (e) => {
    //khoi load lai trang, vi su kien submit load lai trang hoac chuyen den 1 trang moi
    e.preventDefault();
    // console.log(e.target.elements.keyword.value);
    const keyword = e.target.elements.keyword.value;
    if (keyword) {
      url.searchParams.set("keyword", keyword);
    } else {
      url.searchParams.delete("keyword");
    }
    window.location.href = url.href;
  });
}
// End Form Search

//Pagination
const buttonsPagination = document.querySelectorAll("[button-pagination]");
if (buttonsPagination) {
  let url = new URL(window.location.href);
  buttonsPagination.forEach((button) => {
    button.addEventListener("click", () => {
      const page = button.getAttribute("button-pagination");
      console.log(page);
      url.searchParams.set("page", page);
      window.location.href = url.href;
    });
  });
}
//End Pagination

//Checkbox Multi
const checkboxMulti = document.querySelector("[checkbox-multi]");
if (checkboxMulti) {
  const inputCheckAll = checkboxMulti.querySelector("input[name='checkall']");
  const inputsId = checkboxMulti.querySelectorAll("input[name='id']");

  inputCheckAll.addEventListener("click", () => {
    if (inputCheckAll.checked) {
      inputsId.forEach((input) => {
        input.checked = true;
      });
    } else {
      inputsId.forEach((input) => {
        input.checked = false;
      });
    }
  });

  // Solution 1:
  inputsId.forEach((input) => {
    input.addEventListener("click", () => {
      const countChecked = checkboxMulti.querySelectorAll(
        "input[name='id']:checked"
      ).length;
      if (countChecked == inputsId.length) {
        inputCheckAll.checked = true;
      } else {
        inputCheckAll.checked = false;
      }
    });
  });

  //Solution 2:
  // inputsId.forEach(input => {
  //     input.addEventListener("click", () => {
  //         const allChecked = Array.from(checkboxMulti.querySelectorAll("input[name='id']")).every(checkbox => checkbox.checked);
  //         inputCheckAll.checked = allChecked;
  //     });
  // });
}
// End Checkbox Multi

//Form Change Multi
const formChangeMulti = document.querySelector("[form-change-multi]");
if (formChangeMulti) {
  formChangeMulti.addEventListener("submit", (e) => {
    e.preventDefault();
    const checkboxMulti = document.querySelector("[checkbox-multi]");
    const inputsChecked = checkboxMulti.querySelectorAll(
      "input[name='id']:checked"
    );
    const typeChoice = e.target.elements.type.value;
    if (typeChoice == "delete-all") {
      const isConfirm = confirm(
        "Ban co chac chan muon xoa nhung san pham nay?"
      );
      if (!isConfirm) {
        return;
      }
    }
    // const test = document.querySelectorAll("input[name='position']");
    // test.forEach((ind) => {
    //   console.log(ind.value);
    // });
    if (inputsChecked.length > 0) {
      let ids = [];
      const inputIds = formChangeMulti.querySelector("input[name='ids']");
      inputsChecked.forEach((input) => {
        // const id = input.getAttribute("value");
        //value la thuoc tinh co san nen khong can getAttribute van duoc
        const id = input.value;
        if (typeChoice == "change-position") {
          const position = input
            .closest("tr")
            .querySelector("input[name='position']").value;
          ids.push(`${id}-${position}`);
        } else {
          ids.push(id);
        }
      });
      inputIds.value = ids.join(", ");
      formChangeMulti.submit();
    } else {
      alert("Vui long chon it nhan mot ban ghi");
    }
  });
}
//End Form Change Multi

// Show Alert
const showAlert = document.querySelector("[show-alert]");
if (showAlert) {
  const time = parseInt(showAlert.getAttribute("data-time"));
  const closeAlert = showAlert.querySelector("[close-alert]");
  setTimeout(() => {
    showAlert.classList.add("alert-hidden");
  }, time);
  closeAlert.addEventListener("click", () => {
    showAlert.classList.add("alert-hidden");
  });
}
// End Show Alert

//Upload Image
const uploadImage = document.querySelector("[upload-image]");
if (uploadImage) {
  const uploadImageInput = document.querySelector("[upload-image-input]");
  const uploadImagePreview = document.querySelector("[upload-image-preview]");

  uploadImageInput.addEventListener("change", (e) => {
    console.log(e);
    const file = e.target.files[0];
    if (file) {
      console.log(URL.createObjectURL(file));
      uploadImagePreview.src = URL.createObjectURL(file);
    }
  });
}
//End Upload Image
