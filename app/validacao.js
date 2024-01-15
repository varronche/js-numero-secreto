function verificaSeOChutePossuiUmValorValido(chute) {
    const numero = +chute;

    if (chuteForInvalido(numero)) {
       elementoChute.innerHTML += '<div>Valor inválido</div>';
    }

    if (numeroForMaiorOuMenorQueOValorPermitido(numero)) {
        elementoChute.innerHTML += `
            <div>
                Valor inválido: o número secreto precisa estar 
                entre ${menorValor} e ${maiorValor}
            </div>
        `;
        return;
    }

    if (numero === numeroSecreto) {
        document.body.innerHTML = `
            <h2>Você acertou!</h2>
            <h3>O número secreto era ${numeroSecreto}</h3>

            <button class="btn-jogar" id="jogar-novamente">Jogar novamente</button>
        `;
    } else if (numero > numeroSecreto) {
        elementoChute.innerHTML += `
            <div>
                O número secreto é menor <i class="fa-sharp fa-solid fa-arrow-down-wide-short"></i>
            </div>
        `;
    } else {
        elementoChute.innerHTML += `
            <div>
                O número secreto é maior <i class="fa-sharp fa-solid fa-arrow-up-wide-short"></i>
            </div>
    `;
    }
}

function chuteForInvalido(numero) {
    if (chute.toUpperCase() === "GAME OVER") {

        document.body.innerHTML =
            `
            <h2>Game Over!!!</h2>
            <h3>Pressione o botão para jogar novamente</h3>
            <button id="jogar-novamente" class="btn-jogar">Jogar novamente</button>
            `
            document.body.style.color = "#E6A4B4";
            document.body.style.backgroundColor = "black";
    } else {

        elementoChute.innerHTML += '<div>Valor Inválido</div>';
    }
}

function numeroForMaiorOuMenorQueOValorPermitido(numero) {
    return numero > maiorValor || numero < menorValor;
}

document.body.addEventListener('click', e => {
    if (e.target.id == 'jogar-novamente') {
        window.location.reload();
    }
})