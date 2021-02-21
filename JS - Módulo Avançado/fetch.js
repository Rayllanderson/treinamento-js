const url = 'https://api.exchangeratesapi.io/latest?base=USD&symbols=BRL'
//https://rayllanderson-sorteio-api.herokuapp.com/participantes/seuemail@email.com

/*
const fetch = require("node-fetch");
fetch(url).then((response) => {
    return response.json();
}).then( (data) => { // then é pro de cima, o de cima retorna algo, então..
    console.log(data)
})
*/

function converter(){
    let input = document.getElementById('valor');
    let valor = input.value;

    fetch(url).then((response) => {
        return response.json();
    }).then( (data) => { // then é pro de cima, o de cima retorna algo, então..
        let rate = data.rates.BRL;
        document.getElementById('resultado').innerHTML = `$${valor} = R$${(rate * valor).toFixed(2)}`;
    })

}