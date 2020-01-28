const formulario = document.querySelector('.form-tmb');
const buttoncalcularTmb = document.querySelector('.btn-calc');
const resultadoContainer = document.querySelector('.resultado-container');

buttoncalcularTmb.addEventListener('click', event => {
  const usuario = pegarFormTmb(formulario);

  if (usuario.idade === '') {
    return;
  }
  if (usuario.peso === '') {
    return;
  }
  if (usuario.altura === '') {
    return;
  }

  if (usuario.genero === 'homem') {
    const calcuTmbHomem = calcTmbHomem(
      usuario.peso,
      usuario.idade,
      usuario.altura
    );
    criarResultadoCalculadora(resultadoContainer, calcuTmbHomem);
  } else if (usuario.genero === 'mulher') {
    const calcuTmbMulher = calcTmbMulher(
      usuario.peso,
      usuario.idade,
      usuario.altura
    );
    criarResultadoCalculadora(resultadoContainer, calcuTmbMulher);
  }

  formulario.reset();
  event.preventDefault();
});

function criarResultadoCalculadora(container, result) {
  container.textContent = result;
}

function pegarFormTmb(form) {
  const usuario = {
    genero: form.genero.value,
    peso: form.peso.value,
    idade: form.idade.value,
    altura: form.altura.value,
  };

  return usuario;
}

function calcTmbHomem(peso, idade, altura) {
  // eslint-disable-next-line prettier/prettier
  const tmb = 66 + (13.7 * peso) + (5 * altura) - (6.8 * idade);

  const tmbFixed = tmb.toFixed(2);

  return tmbFixed;
}

function calcTmbMulher(peso, idade, altura) {
  // eslint-disable-next-line prettier/prettier
  const tmb = 665 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);

  const tmbFixed = tmb.toFixed(2);

  return tmbFixed;
}

// /////////////////////////////////////////////////////////////////
