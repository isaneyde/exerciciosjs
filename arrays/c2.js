//Filtre os números ímpares de um array usando filter()
const NUMEROS = [45, 57, 483, 54, 3, 978, 982,0];
const impares = NUMEROS.filter(impares => impares % 2 !== 0)
console.log(`Novo array com elementos ímpares ${impares}`);