// console.log("Xin chao buoi toi")

// Start ButtonsStatus
const buttonsStatus = document.querySelectorAll("[button-status]");
// console.log(buttonsStatus);
if(buttonsStatus.length > 0){
    let url = new URL(window.location.href);
    console.log(url.href);
    buttonsStatus.forEach(button => {
        button.addEventListener("click", () => {
            const status = button.getAttribute("button-status");
            if(status)
            {
                url.searchParams.set("status", status);
            }
            else
            {
                url.searchParams.delete("status");
            }
            window.location.href = url.href;
        });
    });
}
// End ButtonsStatus

// Form Search
const formSearch = document.querySelector("#form-search");
if(formSearch)
{
    let url = new URL(window.location.href);
    formSearch.addEventListener("submit", (e) => {
        e.preventDefault();
        // console.log(e.target.elements.keyword.value);
        const keyword = e.target.elements.keyword.value;
        if(keyword)
            {
                url.searchParams.set("keyword", keyword);
            }
            else {
                url.searchParams.delete("keyword");
            }
            window.location.href = url.href;
    });
}

// End Form Search
