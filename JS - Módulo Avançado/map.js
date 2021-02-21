function novoAluno(nome, idade){
    return {nome, idade};
}

const alunos = [
    novoAluno('Ray', 23),
    novoAluno('José', 35), 
    novoAluno('Maria', 22),
    novoAluno('Marcia', 31)
];

console.log(alunos.map((a) => {
    return `${a.nome} tem ${a.idade} anos`
}))

console.log('-------------')


function nomeIdade(aluno){
    return `${aluno.nome} tem ${aluno.idade} anos`
}

function meuMap(funcao, array){
    const newArray = [];
    for (let a of array){
        newArray.push(funcao(a))
    }
    return newArray;
}

console.log(meuMap(nomeIdade, alunos))


