/*

Uma função é um bloco de código projeto pra executar uma tarefa específica.

é como uma pequena "fábrica" onde você faz uma entrada e ele te dá uma saída.

Pode ser encarado como "mini-programas" projetados para fazer uma tarefa que vai contribuir para todo código.

Uma função Javascript é executada quando "algo" a invoca (chama-a).

*/

function soma(valor1, valor2) {
    return valor1 + valor2;
}

document.getElementById("texto").innerHTML = soma(10, 30)