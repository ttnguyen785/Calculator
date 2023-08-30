function add(num1, num2)  {
  return num1 + num2;
	
};
 function subtract(num1, num2) {
  return num1 - num2;
	
};

function multiply (num1, num2) {
    return num1 * num2;
}

function divide (num1, num2) {
    return num1 / num2;
}

function operatate(operator, num1, num2) {
    if (operator == "+") {
        return add(num1, num2);
    }
}



const display = document.getElementById("display");


const buttons = document.querySelectorAll("#keys button:not(#acButton)");


let isFirstClick = true;


const acButton = document.getElementById("acButton");

acButton.addEventListener("click", () => {
  display.textContent = "0";
  isFirstClick = true;
});

buttons.forEach(button => {
  button.addEventListener("click", () => {
    const number = button.textContent;

    if (isFirstClick) {
      display.textContent = number;
      isFirstClick = false;
    } else {
      const currentValue = display.textContent;
      display.textContent = currentValue + number;
    }
  });
});
