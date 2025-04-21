//Gere um número aleatório entre dois valores definidos
let valor1 = Number(prompt("Digite o primeiro valor"));
let valor2 = Number(prompt("Digite o segundo valor"));
function Aleatorio(min, max) {
    return Math.floor(Math.random() * (max - min) ) + min;
  }

  console.log(numeroAleatorio(valor1, valor2))
