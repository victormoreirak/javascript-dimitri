/*

Vamos entender Operadores:
-> Os operadores Javascript são usados para atribuir valores, comparar valores, executar operações aritméticas e muito mais.

São os sinais que usamos: +; -; *; /; =; ++; --; +=; -=; &&; ||; etc...

São separados em 6 "categorias":

1) Operadores Aritméticos (matématicos)
2) Operadores de Atribuição
3) Operadores de Sequência
4) Operadores de Comparação
5) Operador Condicional (Ternário)
6) Operadores Lógicos


1) Operadores Aritméticos (matématicos)

var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

total = valor1 + valor2; // operador aritmético (+) e atribuição (=) 
alert(total);

2) Operadores de Atribuição

var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

total = ++valor1; // operador aritmético (+) e atribuição (=) 
alert('O valor1 ficou: ' + valor1); // operador de sequência (concatenação)



var valor1, valor2, total;
valor1 = 5;
valor2 = 2;

valor1 += valor2;
valor1 = valor1 + valor2; // mesma operação (também serve para - * /)



3) Operadores de Sequência

var valor1, valor2, total;
valor1 = "Victor ";
valor2 = "Moreira";

total = valor1 + valor2;
alert(total);

*/