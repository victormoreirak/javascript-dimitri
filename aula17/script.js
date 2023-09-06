/*

CLASSES EM JAVASCRIPT

Em 2015 foi introduzido no Javascript as Classes. As classes são um conceito antigo em programação e várias linguagens utilizam elas. Mas no Javascript isso é relativamente  novo, por isso mesmo programadores experientes não sabem muito bem utilizar.

Basicamente, as classes são como "fábricas" para criar objetos. Pode se dizer que são "funções especiais" para criação de objetos.

Assim como uma fábrica da vida real precisa das máquinas para construir os objetos, as Classes no Javascript usam um método chamado constructor() para fabricar objetos.



const carro = {
    marca: "Fiat",
    modelo: "Uno",
    ano: 2001
}

*/

class Carro {
    constructor(valor1, valor2, valor3) {
        this.marca = valor1;
        this.modelo = valor2;
        this.ano = valor3;
    }
    buzina() {
        return this.modelo + " buzinou: Biiiiiiiiiiiiii";
    }
}

const uno = new Carro("Fiat", "Uno", 2001);
const gol = new Carro("Volkswagen", "Gol", 2013);
console.log(uno);
console.log(gol.buzina());

gol.ano = 2014
console.log(gol);