/*
    setTimeout - vai realizar uma ação/funcao/tarefa em um determinado tempo. realizará apenas UMA vez
    clearTimeout(timeOut) - para/cancela o timeout. receberá como @param um timeout para parar;
    setInterval - realizará determinada função/tarefa em um determinado intervalo. Irá realizar indefinidamente, até parar com a função >
    clearInterval(interval) - para/cancela o interval. receberá como @param um intervalo para parar;
*/

// vou ter que guardar o intervalo em uma var para parar esse intervalo depois
var interval; 
const h1 = document.getElementsByTagName("h1")[0];

let i = 1;
function iniciar(){
    interval = setInterval(() => {
        h1.innerHTML += " " + i++; 
    }, 1000);
}

function parar(){
    clearInterval(interval);
}