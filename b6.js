const PRODUTOS={
    nome:"Samsung GAlaxy S24",
    categoria:"Smartphone",
    preco :97000,
    descricao:"SAMSUNGN GALAXY S24 ULTRA 6.8″ 5G",
    ano:"2024"
}
console.log(PRODUTOS.descricao);
PRODUTOS.preco=72000;
console.log(PRODUTOS.preco);
delete PRODUTOS.ano;
console.log(PRODUTOS)


