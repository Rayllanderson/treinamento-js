
const resultado = document.getElementById('resultado');
const btnSortear = document.getElementById('btnSortear');
const lista = document.getElementById('lista');
let inputPessoa = document.getElementById('nomePessoa');
const btnAddPessoa = document.getElementById('addP');
const btnMostrarLista = document.getElementById('mostrarP');
const pessoas = [];
let listaAberta = false;

btnAddPessoa.addEventListener('click', function(){
    if(addPessoa()){
        limparInput(inputPessoa)
        printarLista();
    }
    else{
        alert('nome não pode ser vazio')
    }
})  


btnMostrarLista.addEventListener('click', function(){
    if (listaAberta){
        btnMostrarLista.innerText = "Mostrar Participantes"
        esconderLista();
    }else{
        btnMostrarLista.innerText = "Esconder Participantes"
        mostrarLista();
    }
}) 

btnSortear.onclick = sortear

function mostrarLista(){
    listaAberta = true;
    lista.style.display = "inline-block";
}

function esconderLista(){
    listaAberta = false;
    lista.style.display = "none";
}

function removerPessoa(i){
    pessoas.splice(i, 1);
    if(listaVazia()){
        resultado.style = "display: none;"
    }
    printarLista()
}

function printarLista(){
    lista.innerHTML = "";
    const listaNaoVazia = !listaVazia();
    if(listaNaoVazia){
        let i = 0;
        console.log('hmm?')
        pessoas.forEach(function(pessoa){
            lista.innerHTML += (`<li> ${pessoa} <button onclick="removerPessoa(${i++})"> Excluir </button> </li> `)
        });
        lista.innerHTML += '<br><button onclick="limparLista(this)"> Limpar a lista </button>'
    }
}

function sortear(){
    const limite = pessoas.length;
    const listaVazia = limite == 0;
    if(listaVazia){
        alert('Impossível sortear uma lista vazia.')
        return;
    }
    const valor = Math.floor(Math.random() * limite)
    resultado.innerHTML = 'Vencedor: ' + pessoas[valor];
    resultado.style = "display: inline-block;"
}

function addPessoa(){
    const pessoa = inputPessoa.value;
    if (pessoa){
        pessoas.push(pessoa);
        return true;
    }
}

function limparLista(btn){
    pessoas.splice(0, pessoas.length);
    resultado.style = "display: none;"
    btn.remove();
    printarLista()
}

function listaVazia(){
    return pessoas.length == 0;
}

function limparInput(input){
    input.value = "";
}
