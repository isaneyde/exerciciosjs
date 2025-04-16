//Funcao que recebe um array e soma todos elementos do array

const NUMEROS=[5,4,1,0];
function sumArray(){  
    let soma=0; 
for (let i=0;i<NUMEROS.length;i++){
    soma +=NUMEROS[i];
}
return soma;
}
alert(`O soma dos numeros do array é ${sumArray()}`);