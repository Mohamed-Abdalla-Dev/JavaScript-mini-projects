let serialEl = document.querySelector(".serial");
let button = document.querySelector("button");

button.addEventListener("click", () => {
  let characters =
    "1234567890abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let charsCount = 10;
  let randomSerial = "";
  for (let i = 0; i < charsCount; i++) {
    randomSerial += characters[Math.floor(Math.random() * characters.length)];
  }
  serialEl.innerHTML = randomSerial;
});
