function novoAluno(nome, idade){
    return {nome, idade};
}

const alunos = [
    novoAluno('Ray', 23),
    novoAluno('José', 35), 
];

const idadeGeralTurma = alunos.reduce((total, a) => { return total + a.idade}, 0)

console.log(idadeGeralTurma)


console.log('----------------')

function idadeGeral (aluno){
    return aluno.idade;
}

function meuReduce(funcao, array, inicializador){
    let acumulador = inicializador; 
    for(let a of array){
        acumulador += funcao(a);
    }
    return acumulador;
}

console.log(meuReduce(idadeGeral, alunos, 0));