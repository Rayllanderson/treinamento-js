

//new Date(year, month, day, hour, minutes, secconds, millisec)
// mes é um array com 12 pos que começa do 0. ou seja, jan = 0, fev = 1, ... dez = 11;

// d = new Date(2021, 01, 18, 12, 31 ); 

// d = new Date("05/25/1998 14:22"); 

// d = new Date("1997-12-13 14:22"); 

var d = new Date(); 

var diasDaSemana = ["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sab"] 

console.log("Ano: " + d.getFullYear()) // pegando o ano
console.log("Dia: " + d.getDate()) // pegando dia  
console.log("Dia da Semana: " + d.getDay()) // pegando dia da semana, de 0 a 6, em que 0 é domingo e 6 é sábado 
console.log("Hora atual: " + d.getHours()) // hora
console.log("Mês: " + d.getMonth()) // mes. 0 janeiro, 11 dezembro.
console.log("Milisec: " + d.getTime()) //milisec

console.log("Hoje é dia " + d.getDate() + "\ndia da semana: " +  diasDaSemana[d.getDay()])

/*
salvando saída pra relembrar kkk
Ano: 2021
Dia: 18
Dia da Semana: 4
Hora atual: 14
Mês: 1
Milisec: 1613669476050
Hoje é dia 18
dia da semana: Qui*/