let count = document.querySelector(".count");
let progress = document.querySelector(".progress");
let input = document.querySelector("input");
let div = document.querySelector("div");
let maxlength = input.getAttribute("maxlength");

count.innerHTML = maxlength;

input.addEventListener("input", function () {
  count.innerHTML = maxlength - this.value.length;

  if (+count.innerHTML === 0) {
    count.classList.add("zero");
    progress.style.backgroundColor = "red";
  } else {
    count.classList.remove("zero");
    progress.style.backgroundColor = "#2196f3";
  }

  progress.style.width = `${(this.value.length * 100) / maxlength}%`;
});
