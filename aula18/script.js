/**
 
MANIPULAÇÃO DE DATAS

 */

// COMANDO BASE PARA PEGAR A DATA
let data = new Date();
console.log(data);


// PEGAR O ANO ATUAL COM 4 DÍGITOS
let ano = data.getFullYear();
console.log(ano);

// PEGAR O MÊS ATUAL - DE 0 (JANEIRO) ATÉ 11 (DEZEMBRO)
let mes = data.getMonth();
// console.log(mes);

// MOSTRAR O MÊS NO FORMATO ESCRITO
const mesesDoAno = ["Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro"];
let mesEscrito = mesesDoAno [data.getMonth()];

// PEGAR DIA DO MÊS - 1 ATÉ 31
let diaMes = data.getDate();
console.log(diaMes);

// PEGAR O DIA DA SEMANA - 0 ATÉ 6
let diaSemana = data.getDay();
console.log(diaSemana);

// MOSTRAR O DIA NO FORMATO ESCRITO
const diasDaSemana = ["Domingo", "Segunda", "Terça", "Quarta", "Quinta", "Sexta", "Sábado"];
let diaSemanaEscrito = diasDaSemana [data.getDay()];
console.log(diaSemanaEscrito);

// PEGAR A HORA - DE 0 ATÉ 23
let hora = data.getHours();
console.log(hora);

// PEGAR MINUTOS - DE 0 ATÉ 59
let minutos = data.getMinutes();
console.log(minutos);

// PEGAR SEGUNDOS - DE 0 ATÉ 59
let segundos = data.getSeconds();
console.log(segundos);

// PEGAR MILISEGUNDOS - DE 0 ATÉ 999
let milisegundos = data.getMilliseconds();
console.log(milisegundos);

// PEGAR A DATA NO PADRÃO BRASILEIRO - DIA / MÊS / ANO
let dataBR = data.toLocaleString('pt-BR', {dateStyle: 'short'}); // só a hora: timeStyle: 'short'
console.log(dataBR);

// OUTRA OPÇÃO PARA PEGAR OS VALORES SEPARADOS
d = new Date();
diaMes = d.getDate();
mes = d.getMonth() + 1;
ano = d.getFullYear();

function addZero(x) { return x < 10 ? '0' + x : '' + x}

let dataPadraoBR = addZero(diaMes) + "/" + mes + "/" + ano;
console.log(dataPadraoBR)

// COMPARAR DATAS - MAIOR OU MENOR. EX: VENCIMENTOS
var hoje = new Date();
var vencimento = new Date(2022, 0, 15);

if(hoje > vencimento){
console.log("Sua conta está vencida!")
} else {
    console.log("Ainda não venceu, tudo certo!");
}

// DIFERENÇA ENTRE DUAS DATAS EM DIAS
var dataInicial = new Date();
var dataFinal = new Date(2022, 11, 31);
var diferencaTempo = dataFinal.getTime() - dataInicial.getTime();

var diferencaDias = Math.ceil(diferencaTempo / (24 * 60 * 60 * 1000));

console.log(diferencaDias + " dias");