
function calMediaAluno (){
    return (this.notas[0] + this.notas[1]) /2;
}
//CRIAR OBJETOS

// MÉTODO UM //////////
var aluno = {
    nome: "Igor",
    notas: [7.5, 5.0],
    media: calMediaAluno
}

console.log(aluno)
// aluno.nome
console.log(aluno["nome"])
console.log(aluno["notas"][1])

console.log(aluno.media())

///////////////////////// MÉTODO DOIS //////////////////////////////////////////

function criarAluno(nome, notas){
    return {
        nome: nome,
        notas: notas,
        media: function(){
            return (this.notas[0] + this.notas[1]) /2;
        },
        toString: function(){
            console.log(`${this.nome} - ${this.notas[0]} - ${this.notas[1]} - ${this.media()}`)
        }
    }
}

var joao = criarAluno("João", [7.5, 8.5]);
var turma = [
    criarAluno("José", [6, 7.5]),
    joao,
    criarAluno("Maria", [9, 8.5])
]

//console.log(turma[1].media())
console.log("Turma dos idiotas de 18 de fevereiro de 2021")
turma.forEach(function(e){
    e.toString();
})

///////////////////////// MÉTODO TRÊS ///////////////////////////////

function aluno (nome, notas){
    this.nome = nome;
    this.notas = notas;
    this.media = function(){
        return (this.notas[0] + this.notas[1])/2;
    },
    this.toString = function(){
        console.log(`${this.nome} - ${this.notas[0]} - ${this.notas[1]} - ${this.media()}`)
    }
}

var a = new aluno("João", [8.5, 5]);
a.toString()