const menorValor = 1;
const maiorValor = 100;
const numeroSecreto = gerarNumeroAleatorio();

function gerarNumeroAleatorio() {
    return parseInt(Math.random() * maiorValor + 1);
}

console.log('Numero Secreto ' + numeroSecreto);

const elementoMenorValor = document.getElementById('menor-valor');

const elementoMaiorValor = document.querySelector('#maior-valor');

elementoMenorValor.innerHTML = menorValor;
elementoMaiorValor.innerHTML = maiorValor;
