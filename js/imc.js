const formulario2 = document.querySelector('.form-imc');
const buttonCalcularImc = document.querySelector('.btn-calc-imc');
const cuidadoImc = document.querySelector('.hover');
// eslint-disable-next-line prettier/prettier
const resultadoContainerImc = document.querySelector('.resultado-container-imc');

buttonCalcularImc.addEventListener('click', event => {
  const usuario2 = pegarFormImc(formulario2);
  const calculadoraImc = calcularImc(usuario2.peso, usuario2.altura);

  if (usuario2.peso === '' || usuario2.altura === '') {
    return;
  }

  criarResultadoCalculadora(resultadoContainerImc, calculadoraImc);
  avisoImc();

  resultadoContainerImc.classList.add('container-animation');

  event.preventDefault();
  formulario2.reset();
});

function pegarFormImc(form) {
  const usuario = {
    peso: form.peso.value,
    altura: form.altura.value,
  };

  return usuario;
}

function calcularImc(peso, altura) {
  const imc = peso / (altura * altura);

  const imcFixed = imc.toFixed(3);

  return imcFixed;
}

function avisoImc() {
  const resultadoContent = resultadoContainerImc.textContent;

  if (resultadoContent <= 17) {
    criarHover('Muito abaixo do peso!');
  }

  if (resultadoContent > 17 && resultadoContent <= 18.49) {
    criarHover('Abaixo do peso!');
  }

  if (resultadoContent > 18.5 && resultadoContent <= 24.99) {
    criarHover('Peso normal!');
  }

  if (resultadoContent > 25 && resultadoContent <= 29.99) {
    criarHover('Acima do peso!');
  }

  if (resultadoContent > 30 && resultadoContent <= 34.99) {
    criarHover('Obesidade nível I');
  }

  if (resultadoContent > 35 && resultadoContent <= 39.99) {
    criarHover('Obesidade nível II');
  }

  if (resultadoContent > 40) {
    criarHover('Obesidade Nível III');
  }
}

function criarHover(data) {
  resultadoContainerImc.addEventListener('mouseover', () => {
    cuidadoImc.textContent = data;
  });

  resultadoContainerImc.addEventListener('mouseout', () => {
    cuidadoImc.textContent = '';
  });
}
