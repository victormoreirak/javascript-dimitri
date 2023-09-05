/*
 
SWITCH

É usado para realizar diferentes ações com base em diferentes condições no mesmo bloco de verificação. Caso a condição não seja compatível, não será executada e o valor padrão será acionado.

 */


/*
function verificaCor() {
    let cor = document.getElementById("cor").value;
    cor = cor.toLowerCase();

switch (cor) {
    case "azul":
        // o que acontece
        document.body.style.backgroundColor = "blue";
        break;
    case "vermelho":
        // o que acontece
        document.body.style.backgroundColor = "red";
        break;
    case "amarelo":
        //  o que acontece
        document.body.style.backgroundColor = "yellow";
        break;
    default:
        // o que acontece
        document.getElementById("teste").innerHTML = "Nenhuma cor disponível para: " + cor;
    }
}

*/

function diaDaSemana() {
    
    var dia = new Date().getDay();

    console.log(dia);

    switch (dia) {
    case 0:
        // o que acontece
        document.getElementById("teste").innerHTML = "Hoje é domingo";
        break;
    case 1:
        // o que acontece
        document.getElementById("teste").innerHTML = "Hoje é segunda";
        break;
    case 2:
        //  o que acontece
        document.getElementById("teste").innerHTML = "Hoje é terça";
        break;
    case 3:
        //  o que acontece
        document.getElementById("teste").innerHTML = "Hoje é quarta";
        break;
    case 4:
        //  o que acontece
        document.getElementById("teste").innerHTML = "Hoje é quinta";
        break;
    case 5:
        //  o que acontece
        document.getElementById("teste").innerHTML = "Hoje é sexta";
        break;
    case 6:
        //  o que acontece
        document.getElementById("teste").innerHTML = "Hoje é sábado";
        break;

    default:
        // o que acontece
        document.getElementById("teste").innerHTML = "Não sei que dia é...";
    }
}
