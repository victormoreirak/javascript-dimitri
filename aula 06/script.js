/* 
Vamos entender variáveis

No javascript temos 4 palavras-chaves para declarar variáveis:

-> var
-> let
-> const
*/

/*
DECLARAÇÃO DE VARIAVEIS
var a, b, c;

ATRIBUIÇÃO DOS VALORES
a = 2;
b = 3;
c = a + b;

var a = 5; //com "var" é possível reatribuir valores, com let e const não 
alert(c);*/

// DECLARAÇÃO DE VARIÁVEIS
var nome, sobrenome, nomeCompleto, idade, soma;

// ATRIBUIÇÃO DOS VALORES
nome = "Victor";
sobrenome = "Moreira";
idade = 30;
nomeCompleto = nome +" "+ sobrenome;

soma = idade + 10;
pessoa = nome + " " + soma;

document.getElementById("texto").innerHTML = nomeCompleto;