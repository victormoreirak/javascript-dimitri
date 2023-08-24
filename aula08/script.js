/*

Uma função é um bloco de código projeto pra executar uma tarefa específica.

é como uma pequena "fábrica" onde você faz uma entrada e ele te dá uma saída.

Pode ser encarado como "mini-programas" projetados para fazer uma tarefa que vai contribuir para todo código.

Uma função Javascript é executada quando "algo" a invoca (chama-a).


// FUNÇÃO DE SOMA
function soma(valor1, valor2) {
    return valor1 + valor2;
}

document.getElementById("texto").innerHTML = soma(10, 30)

// ou var total = soma(10, 30);
// alert(total);



// FUNÇÃO DE COTAÇÃO DO DÓLAR
function realParaDolar (real, cotacaoDolar) {
    return real * cotacaoDolar;
}

var valorReal = 7.89;
var cotacao = 5.08

var total = realParaDolar(valorReal, cotacao);

alert("O valor em real é R$: " + valorReal + " O valor em dólar U$ é: " + total);



function alertaHello() {
    alert("Olá pessoal!");
} //onclick no html



function paraCelsius(valorFahrenheit) {
    return (5/9) * (valorFahrenheit - 32);
}

var x = paraCelsius(77);

alert("A temperatura é de " + x + " ºC")

*/

function minhaFuncao() {
    var x = 2;
}