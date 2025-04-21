//Soma de todos os números de um array usando reduce()
const NUMEROS = [12, 57, 9, 54, 3, 0, 43,18,90,657];
const soma = NUMEROS.reduce((soma, numero) => soma + numero, 0);
console.log(`A soma de todos elementos do array é ${soma}`);
