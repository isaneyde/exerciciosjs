//Função que retorna quantos dias faltam para o final do ano
const ACTUAL =new Date();
const END_YEAR = new Date(2025,11, 31);
function newYear(){
const DAYS= END_YEAR-ACTUAL;
    return DAYS.toLocaleString();
}
console.log(newYear());