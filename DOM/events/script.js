/*const p = document.getElementById("p1");

// modificando o texto

p.innerHTML = "Conteúdo novo"; // recebe um hmtl

p.innerText = "Conteúdo mais novo"; //recebe texto. mostra o que aparece na tela.

p.textContent = "Conteúdo mais novo ainda"; //recebe texto. todos os textos que estão na tag selecionada, mesmo oculto

// MODIFICANDO ATRIBUTOS

p.className = "paragrafo"; // seta uma classe pro elemento.

p.style = "color: blue";

p.getAttribute("atributo personalizado") // pega atributos, inclusive personalizados. like: style, id, class...


*/


// PEGANDO ELEMENTOS
const h1 = document.getElementById("h1");
const text = document.getElementById("text")
const h3 = document.getElementById("h3");

function changeColorOnClick() {
    const red = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    this.style.color = `rgb(${red}, ${blue}, ${green})`
}

text.onchange = () => { //muda só depois de dar enter ou sair do input
    h3.innerHTML = "Você digitou: " + text.value;
}

text.oninput = () => { //muda na mesma hora
    h3.innerHTML = "Você digitou: " + text.value;
}

h1.addEventListener('mouseover', changeColorOnClick);


let t1 = document.getElementById('title');
let t2 = document.getElementById('title2');

const btnUpper = document.getElementById('upper');
const btnLower = document.getElementById('lower');

btnUpper.addEventListener('click', function(){
    upperCase(t1);
    upperCase(t2);
});
btnLower.addEventListener('click', function(){
    lowerCase(t1);
    lowerCase(t2);
});

function lowerCase(e){
    e.innerHTML = e.innerHTML.toLowerCase();
}

function upperCase(e){
    e.innerHTML = e.innerHTML.toUpperCase();
}

const p = document.getElementById('p');

function print(){
    console.log(this)
}

p.onclick = print

//p.addEventListener('click', print);



window.onload = function(){
    let div = document.getElementById('div');

    //acessando os filhos
    let h1 = div.children[0];
  //  console.log(h1)
   // console.log(h1.parentElement) // acessando o elemento pai

    //outras formas
    let titles = document.getElementsByTagName('h1');

    for(let h of titles){
        h.addEventListener('click', whoIsTheFather)
    }

    function whoIsTheFather(e){
        const element = e.target;
        console.log(element.parentElement);
    }
}