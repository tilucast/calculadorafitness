const calcTmb = document.querySelector('.calc-tmb');
const calcImc = document.querySelector('.calc-imc');
const itemsNav = document.querySelector('.calculadoras-nav');
const primeiroItemNav = document.querySelector('.item-nav-i');
const segundoItemNav = document.querySelector('.item-nav-a');

itemsNav.addEventListener('click', event => {
  const targetClassName = event.target.className;

  if (targetClassName === 'item-nav-a') {
    event.target.style.backgroundColor = 'blanchedalmond';
    primeiroItemNav.style.backgroundColor = 'rgb(222, 222, 224)';
    calcImc.className += ' output';
    calcTmb.className += ' hidden';
    resultadoContainer.textContent = '';
  } else if (targetClassName === 'item-nav-i') {
    event.target.style.backgroundColor = 'blanchedalmond';
    segundoItemNav.style.backgroundColor = 'rgb(222, 222, 224)';
    calcImc.className = 'calc-imc';
    calcTmb.className = 'calc-tmb';
    resultadoContainerImc.textContent = '';
  }
});
