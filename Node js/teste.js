function numeroAleatorio(tamanho, min, max) {
    if (tamanho <= 0 || min > max) {
        throw new Error("Argumento Inválido");
    }
    const arrayAleatorio = [];
    for (let i = 0; i < tamanho; i++) {
        const numeroAleatorio = Math.floor(Math.random() * (max - min + 1)) + min;
        arrayAleatorio.push(numeroAleatorio);
    }
    console.log(arrayAleatorio);
    return arrayAleatorio;
}

function elementosMaisFrequentes(arrayAleatorio) {
    let elementoMaisFrequente = null;
    let ocorrenciasMaior = 0;
    const contagem = {};

    for (let i = 0; i < arrayAleatorio.length; i++) {
        const elemento = arrayAleatorio[i];
        if (contagem[elemento]) {
            contagem[elemento]++;
        } else {
            contagem[elemento] = 1;
        }
    }
    for (const [elemento, ocorrencias] of Object.entries(contagem)) {
        if (ocorrencias > ocorrenciasMaior) {
            elementoMaisFrequente = elemento;
            ocorrenciasMaior = ocorrencias;
        }
    }

    if (ocorrenciasMaior === 0) {
        console.log("Não há elementos mais frequentes");
    } else {
        console.log(`Elemento mais frequente: ${elementoMaisFrequente}`);
    }
}

const arrayGerado = numeroAleatorio(10, 1, 5);
elementosMaisFrequentes(arrayGerado);
//numeroAleatorio(5, 3, 4);


