
const aluno = {
    nome: "whatever",
    notas: [10, 2]
}

const aluno2 = '{"nome": "João", "notas": "[1, 8.6]"}'



const a = JSON.stringify(aluno) //pega um obj json e transforma em string.
const b = JSON.parse(aluno2) //pega uma string e transforma em JSON

console.log(a) // obj em string
console.log(b) // string em JSON ou obj