//Criacao de  um array de números e uso do map para dobrar cada número. 
const NUMEROS = [12, 3, 483, 1097, 3, 0, 35];
const DOBRO = NUMEROS.map(numero => numero * 2);
console.log(`Novo array com os números dobrados ${DOBRO}`);