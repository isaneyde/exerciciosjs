const PESSOA={
    nome:"Augusta Ada Byron King",
    estadoCivil:"solteira",
    anoNascimento:1815
}

const BIOGRAFIA={
    profissoes:"Poetisa, Inventora, Cientista Informática, Desenvolvedora de software, matemática",
    anoMorte:1852,
    Formacao:"Universidade de Londres"
}
 const PROPRIEDADES ={...PESSOA, ...BIOGRAFIA}
console.log(PROPRIEDADES)
