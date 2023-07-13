const display = document.querySelector('.display');
const button = document.querySelectorAll('button');

const specialChars = ['%', '*', '/', '-', '+', '='];
let output = '';

const calculateValueOutput = (buttonValue) => {
  display.focus();
  if (buttonValue === '=' && output !== '')
    output = eval(output.replace('%', '/100'));
  else if (buttonValue === 'AC') output = '';
  else if (buttonValue === 'DEL') output = output.toString().slice(0, -1);
  else {
    if (output === '' && specialChars.includes(buttonValue)) return;
    output += buttonValue;
  }
  display.value = output;
};

button.forEach((btn) => {
  btn.addEventListener('click', (e) =>
    calculateValueOutput(e.target.dataset.value)
  );
});
