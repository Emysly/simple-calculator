const add = (a, b) => {
  return a + b;
}

const subtract = (a, b) => {
  return a - b;
}

const divide = (a, b) => {
  return a / b;
}

const multiply = (a, b) => {
  return a * b;
}

document.querySelector('.add').addEventListener('click', (e) => {
  e.preventDefault();
  const value1 = parseInt(document.querySelector('.display--screen1').value);

const value2 = parseInt(document.querySelector('.display--screen2').value);

  document.querySelector('.results').value = add(value1, value2);
})

document.querySelector('.subtract').addEventListener('click', (e) => {
  e.preventDefault();
  const value1 = parseInt(document.querySelector('.display--screen1').value);

const value2 = parseInt(document.querySelector('.display--screen2').value);

  document.querySelector('.results').value = subtract(value1, value2);
})

document.querySelector('.divide').addEventListener('click', (e) => {
  e.preventDefault();
  const value1 = parseInt(document.querySelector('.display--screen1').value);

const value2 = parseInt(document.querySelector('.display--screen2').value);

  document.querySelector('.results').value = divide(value1, value2);
})

document.querySelector('.multiply').addEventListener('click', (e) => {
  e.preventDefault();
  const value1 = parseInt(document.querySelector('.display--screen1').value);

const value2 = parseInt(document.querySelector('.display--screen2').value);

  document.querySelector('.results').value = multiply(value1, value2);
})