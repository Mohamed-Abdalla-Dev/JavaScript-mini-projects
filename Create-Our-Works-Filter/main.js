let switcherLis = document.querySelectorAll(".switcher li");
let imgs = Array.from(document.querySelectorAll(".gallery img"));

switcherLis.forEach((li) => {
  li.addEventListener("click", removActive);
  li.addEventListener("click", manageImgs);
});

function removActive() {
  switcherLis.forEach((li) => {
    li.classList.remove("active");
    this.classList.add("active");
  });
}

function manageImgs() {
  imgs.forEach((img) => {
    img.style.display = "none";
  });
  // document.querySelectorAll(this.dataswet.cat);
  document.querySelectorAll(this.dataset.cat).forEach((ele) => {
    ele.style.display = "block";
  });
}
