const inputAdultos = document.getElementById('adultos');
const inputCriancas =  document.getElementById('criancas');
const inputDuracao =  document.getElementById('duracao');
const divResultado = document.getElementById('resultado');

function calcular(){
    let adultos = inputAdultos.value ? inputAdultos.value : 0;
    let criancas = inputCriancas.value ? inputCriancas.value : 0;
    let duracao = inputDuracao.value;
    let qtdTotalCarne = carnePorPessoa(duracao) * adultos + (carnePorPessoa(duracao) / 2 * criancas);
    let qtdTotalCerveja = cervejaPorPessoa(duracao) * adultos;
    let qtdTotalBebidas = bebidasPorPessoa(duracao) * adultos + (bebidasPorPessoa(duracao) / 2 * criancas);

    divResultado.innerHTML = `<p>${qtdTotalCarne/1000}Kg de Carne`;
    divResultado.innerHTML += `<p>${Math.ceil(qtdTotalCerveja / 355)} Latas de Cerveja`;
    divResultado.innerHTML += `<p>${Math.ceil(qtdTotalBebidas / 2000)} Garrafas de 2 Litros`;
}

function carnePorPessoa(duracao){
    return duracao >= 6 ? 650 : 400;
}

function cervejaPorPessoa(duracao){
    return duracao >= 6 ? 2000 : 1200;
}

function bebidasPorPessoa(duracao){
    return duracao >= 6 ? 1500 : 1000;
}