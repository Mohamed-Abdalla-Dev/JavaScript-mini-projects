let bars = document.querySelector(".bars");
let nav = document.querySelector("nav");
let xMark = document.querySelector(".close");

bars.addEventListener("click", () => {
  nav.classList.add("open");
});

xMark.addEventListener("click", () => {
  nav.classList.remove("open");
});

document.addEventListener("keyup", (e) => {
  // console.log(e)
  if (e.key === "Backspace") {
    nav.classList.remove("open");
  }
});
