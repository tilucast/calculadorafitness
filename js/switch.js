const calcTmb = document.querySelector('.calc-tmb');
const calcImc = document.querySelector('.calc-imc');
const mudarCalc = document.querySelector('.penis');

mudarCalc.addEventListener('click', () => {
  if (calcImc.className === 'calc-imc') {
    calcImc.className += ' output';
    calcTmb.className += ' hidden';
  } else {
    calcImc.className = 'calc-imc';
    calcTmb.className = 'calc-tmb';
  }
});
