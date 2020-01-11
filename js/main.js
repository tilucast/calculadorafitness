const formulario = document.querySelector('.form-tmb');

const btn = document.querySelector('.btn-calc');

btn.addEventListener('click', event => {
  const usuario = pegarForm(formulario);

  if (usuario.genero === 'homem') {
    const calcuTmbHomem = calcTmbHomem(
      usuario.peso,
      usuario.idade,
      usuario.altura
    );
    criarResultadoCalculadora(calcuTmbHomem);
  } else {
    const calcuTmbMulher = calcTmbMulher(
      usuario.peso,
      usuario.idade,
      usuario.altura
    );
    criarResultadoCalculadora(calcuTmbMulher);
  }

  formulario.reset();
  event.preventDefault();
});

function criarResultadoCalculadora(result) {
  const resultadoText = document.querySelector('.resultado-text');
  resultadoText.textContent = result;
}

function pegarForm(form) {
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

  return tmb;
}

function calcTmbMulher(peso, idade, altura) {
  // eslint-disable-next-line prettier/prettier
  const tmb = 665 + (9.6 * peso) + (1.8 * altura) - (4.7 * idade);

  return tmb;
}
