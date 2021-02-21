
function novoAluno(nome, idade){
    return {nome, idade};
}

const alunos = [
    novoAluno('Ray', 23),
    novoAluno('José', 35), 
    novoAluno('Maria', 22),
    novoAluno('Marcia', 31)
];

const alunosComMenosDe30 = alunos.filter(function(a){
    return a.idade < 30;
})

const alunosComMaisDe30 = alunos.filter( a => a.idade > 30)

console.log('Todos os alunos: ')
console.log(alunos)

console.log('Alunos Com Menos De 30 anos: ')
console.log(alunosComMenosDe30)

console.log('Alunos Com Mais De 30 anos: ')
console.log(alunosComMaisDe30)

/////////////////////////////////////

console.log('--------------------------')

function maiorQue30(aluno){
    return aluno.idade > 30;
}

function meuFilter(condicao, array){
    const novoArray = [];
    for (let a of array){
        if (condicao(a)){
            novoArray.push(a)
        }
    }
    return novoArray;
}

console.log('Alunos Com Mais De 30 anos: ')
console.log(meuFilter(maiorQue30, alunos));