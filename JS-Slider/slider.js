let sliderImages = Array.from(
  document.querySelectorAll(".slider-container img"),
);
let slidesCount = sliderImages.length;
let currentSlide = 1;
let slideNumber = document.getElementById("slider-number");
let nextButton = document.getElementById("next");
let indicators = document.getElementById("indicators");
let prevtButton = document.getElementById("prev");

nextButton.addEventListener("click", nextslide);
prevtButton.addEventListener("click", prevslide);

let liItems = "";
for (i = 1; i <= slidesCount; i++) {
  liItems += `<li data-index = ${i}>${i}</li>`;
}
indicators.innerHTML = `
  <ul id = "Items">${liItems}</ul>
`;

let paginationUl = document.getElementById("Items");

let paginationBullets = Array.from(document.querySelectorAll("#Items li"));

paginationBullets.forEach((li) => {
  li.addEventListener("click", function () {
    currentSlide = parseInt(this.dataset.index);

    theChecker();
  });
});

theChecker();

// Next Slide Function
function nextslide() {
  if (nextButton.classList.contains("disabled")) {
    return;
  } else {
    currentSlide++;
    theChecker();
  }
}

// prev slide Function
function prevslide() {
  if (prevtButton.classList.contains("disabled")) {
    return;
  } else {
    currentSlide--;
    theChecker();
  }
}

function theChecker() {
  slideNumber.innerHTML = "Slide #" + currentSlide + " of " + slidesCount;

  removeAllActive();

  sliderImages[currentSlide - 1].classList.add("active");
  paginationUl.children[currentSlide - 1].classList.add("active");

  if (currentSlide === 1) {
    prevtButton.classList.add("disabled");
  } else if (currentSlide === 5) {
    nextButton.classList.add("disabled");
  } else {
    prevtButton.classList.remove("disabled");
    nextButton.classList.remove("disabled");
  }
}

function removeAllActive() {
  sliderImages.forEach((img) => {
    img.classList.remove("active");
  });

  paginationBullets.forEach((bullt) => {
    bullt.classList.remove("active");
  });
}
