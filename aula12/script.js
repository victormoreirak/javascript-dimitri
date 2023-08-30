/*

ARRAYS

Os arrays Javascript são usados para armazenar vários valores em uma única variável. Diferente dos objetos, que funcionam com propriedades ou "nomes" que você dá para os itens dentro dele, os arrays não possuem propriedades. O item dentro dele é encontrado pela posição.

Imagine um array como uma lista de itens, com controle, por ordem de posição dentro dele.

Ex: const lista = ["arroz", "feijão", "macarrão", "leite"];

A lista[0] (lista na posição 0) vai conter o valor "arroz".
A lista[1] (lista na posição 1) vai conter o valor "feijão".

E assim por diante.



const lista = ["arroz", "feijão", "macarrão", "leite"];

const pessoa = ["Victor", "Moreira", 27]; //array
pessoa[0];


const pessoa = {nome:"Victor", sobrenome:"Moreira", idade: 27} // objeto
pessoa.nome;


const pessoa = ["Victor", "Moreira", 27]; //array
alert(pessoa[pessoa.length - 1]); // para descobrir o último item da lista
pessoa.push("Brasileiro"); // para adicionar mais um item
console.log(pessoa);

alert(Array.isArray(pessoa)); // para saber se o variável é um array (matriz), nesse caso retornaria true



const pessoa = ["Victor", "Moreira", 27]; //array
pessoa.pop(); // para remover o último item da lista
pessoa.push("Qualauqer coisa"); // para adicionar o item a lista
pessoa.shift(); // para remover o primeiro item da lista
pessoa.unshift("Bonitão") // para adicionar o item ao primeiro campo

document.getElementById("teste").innerHTML = pessoa.join(" - ");
*/



const lista1 = ["Arroz", "Feijão", "Macarão", "Leite"];
const lista2 = ["Suco", "Refrigerante", "Carne"];
const lista3 = ["Salgadinho"];

const superLista = lista1.concat(lista2, lista3); // para concatenar as duas listas

document.getElementById("teste").innerHTML = superLista

const jogadores = ["Biro Biro", "Ribamar", "Pelé", "Maradona"];
const craques = jogadores.slice(2, 6); // mostra a lista a partir do item 2 e para no item 5 (o 6 não é mostrado)

const jogOrdem = jogadores.sort(); // para listar em ordem alfabética

jogadores.sort();
jogadores.reverse(); // de Z a A


const numeros = [40, 100, 1, 5, 25, 10];

numeros.sort(function (a, b) {return a - b}); // para colocar em ordem númerica




const numeros = [40, 100, 1, 5, 25, 10];
document.getElementById("teste").innerHTML = MaiorNumero(numeros);

function MaiorNumero(array) {
    return Math.max.apply(null, array); // para descobrir o maior número da lista
}

function MenorNumero(array) {
    return Math.min.apply(null, array); // para descobrir o menor número da lista
}




const maior20 = numeros.filter(filtragem);
function filtragem(value, index, array) {
    return value > 20; // para filtrar números maiores que 20 
}; 


