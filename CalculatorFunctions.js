
const display = document.getElementById("display");
const buttons = document.querySelectorAll("#keys button:not(#acButton):not(#equal-key)");
const acButton = document.getElementById("acButton");

let isFirstClick = true;

acButton.addEventListener("click", () => {
  display.textContent = "0";
  isFirstClick = true;
});

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const number = button.textContent;
    const currentValue = display.textContent;
    display.textContent = currentValue === "0" ? number : currentValue + number;
  });
});



