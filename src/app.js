const calculatorInput = document.querySelector('.calculator-input');
const calculatorButton = document.querySelector('.calculator-button');
const calculatorList = document.querySelector('.result-list');

calculatorButton.addEventListener('click', addNumber);

function addNumber(event) {
  event.preventDefault();

  const calculatorDiv = document.createElement('div');
  calculatorDiv.classList.add('number');

  const newNumber = document.createElement('li');
  newNumber.innerText = calculatorInput.value;
  newNumber.classList.add('calculator-item');
  calculatorDiv.appendChild(newNumber);

  calculatorList.appendChild(calculatorDiv);

  calculatorInput.value = '';
}
