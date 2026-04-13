let lis = document.querySelectorAll("ul li");
let Div = document.querySelector(".experiment");

if (window.localStorage.getItem("color")) {
  // If There Is Color in Local Storage
  //[1] Add color To Div
  Div.style.backgroundColor = window.localStorage.getItem("color");
  //[2] Remove Active Class From All lis
  lis.forEach((li) => {
    li.classList.remove("active");
  });
  //[3] Add Active Class To Current Color
  document
    .querySelector(`[data-color = "${window.localStorage.getItem("color")}"]`)
    .classList.add("active");
}

lis.forEach((li) => {
  li.addEventListener("click", (e) => {
    // console.log(e.currentTarget.dataset.color)
    // remove Active Class From All lis
    lis.forEach((li) => {
      li.classList.remove("active");
    });
    // Addd Active class to current Element
    e.currentTarget.classList.add("active");
    // Add current color To Local Storage
    window.localStorage.setItem("color", e.currentTarget.dataset.color);
    // change Div background-color
    Div.style.backgroundColor = e.currentTarget.dataset.color;
  });
});