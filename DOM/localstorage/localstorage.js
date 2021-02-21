/*

localStorage.setItem(); //gravar um dado na memória do navegador

localStorage.getItem(); // recuperar o arquivo na memória

localStorage.removeItem() // remove o arquivo */

/*
//exemplo 
localStorage.setItem("nome", "João"); //setando valor...
const n = localStorage.getItem("nome"); //recuperando valor...
console.log(n) 
localStorage.removeItem("nome"); // removeu...
*/

//exemplo de uso:

let h1 = document.getElementById('h1');
let input = document.getElementById('text');
let btn = document.getElementById('clearName');

input.oninput = setName;
btn.addEventListener('click', clearName)

function setName(){
    let valor = this.value;
    h1.innerHTML = 'Olá, ' + valor + "!";
    localStorage.setItem('nome', valor);
    displayRemoveBtn();
}

window.onload = function(){
   greetings();
}

function displayRemoveBtn(){
    btn.style.display = "inline-block";
}

function greetings(){
    const userName = localStorage.getItem('nome');
    let greetings = null;
    if(userName){
        greetings = 'Olá, '+ userName + '!';
        displayRemoveBtn();
    }else{
        greetings = "Olá!";
        hideRemoveBtn();
    }
    h1.innerHTML = greetings;
}

function hideRemoveBtn(){
    btn.style.display = "none";
}

function clearName(){
    hideRemoveBtn();
    localStorage.removeItem('nome');
    input.value = "";
    greetings();
}