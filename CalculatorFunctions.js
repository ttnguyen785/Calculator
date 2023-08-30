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

let first = 5;
let second = 5;
let operator = "+";

const keysDiv = document.getElementById('keys');

keysDiv.addEventListener('click', (event) => {
  if (event.target.nodeName !== 'BUTTON') {
    return;
  }

  const number = event.target.innerText;
  console.log(number);});
