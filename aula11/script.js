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
*/

const pessoa = ["Victor", "Moreira", 27]; //array
alert(pessoa[pessoa.length - 1]); // para descobrir o último item da lista
pessoa.push("Brasileiro"); // para adicionar mais um item
console.log(pessoa);

alert(Array.isArray(pessoa)); // para saber se o variável é um array (matriz), nesse caso retornaria true