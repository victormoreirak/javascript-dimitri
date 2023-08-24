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


4) Operadores de Comparação

var valor1, valor2, total;
valor1 = 8;
valor2 = 10;

total = (valor1 == valor2);
alert(total);


var valor1, valor2, total;
valor1 = 8;
valor2 = 12;

total = (valor1 <= 9) // true (verdadeiro) ou false (falso);
alert(total);


5) Operador Condicional (Ternário)

var idade, eleitor;
idade=18;
eleitor = (idade < 18) ? "Não é eleitor" : "Sim, é eleitor";

alert('A resposta é: ' + eleitor + '! A idade dele é de: ' + idade + ' anos');



6) Operadores Lógicos // quano precisa de mais de 1 condição



var idade, eleitor, resultado;
idade=63;
eleitor = (idade < 18) ? "Não é eleitor" : "Sim, é eleitor";

resultado = (idade > 60 && idade < 70); // retorna true, senão false

alert(resultado)




var idade, eleitor, resultado;
idade=63;
eleitor = (idade < 18) ? "Não é eleitor" : "Sim, é eleitor";

resultado = !(idade === 65 || idade === 72); // retorna true, senão false

alert(resultado);
*/