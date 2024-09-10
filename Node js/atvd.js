const array = [...Array(10)].map(() => Math.random() * 18 - 9);

function getRandomIntInclusive(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1)) + min;
}

const randomInt = getRandomIntInclusive(-9, 9); 
/*
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
   let maior = null;
   let ocorrencias = -1;
for (let i = 0; i < arrayAleatorio.lenght; i++) {
   let ocorrencias = 1;
   for (let t = i + 1; t < arrayAleatorio.lenght; t++) {
       if (array[i] === array[t]) {
           ocorrencias++;
       }
   }
   if (ocorrencias > ocorrenciasMaior) {
       maior = array[i];
       ocorrenciasMaior > ocorrencias;
   }
}
if (ocorrenciasMaior === -1) {
   console.log("Nao ha elementos mais frequentes")
} else {
   return console.log(maior);
}
} */