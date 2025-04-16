const ARRAY_PARES = [3, 8, 5, 0, 6, 2, 3];
function pares(ARRAY_PARES) {

   const NOVO_ARRAY = ARRAY_PARES.filter(ARRAY_PARES => ARRAY_PARES % 2 == 0);

   return NOVO_ARRAY;
}
alert(`O array com elementos pares ${pares(ARRAY_PARES)}`);