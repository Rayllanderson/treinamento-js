alunos = ["João", "Maria", "Lucas"];
notasA = [7.5, 8.5, 6.5];
notasB = [4.5, 9.5, 4.0];

function media(n1, n2){
    return (n1 + n2) / 2;
}
function passou(media){
    if(media < 7){
        return "Reprovado";
    }
    return "Aprovado"
}

for (let i in alunos) {
    notaA = notasA[i];
    notaB = notasB[i];
    this.media = media(notaA, notaB);
    
    console.log(`${alunos[i]} - ${notaA} - ${notaB} - ${this.media} - ${passou(this.media)}`)
}

