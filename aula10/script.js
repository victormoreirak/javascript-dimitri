/*

EVENTOS

Eventos são ações disparadas pela interação dos usuários na página. É o correto manejo desses eventos que tornam as páginas interativas e dinâmicas.

Existem muitos eventos. Veja os mais utilizados:

onclick -> Disparado quando recebe um click.
ondblclick -> Disparado com click duplo.
onmouseover -> Disparado quando o mouse está sobre.
onmouseout -> Disparado quando o mouse é movido para fora do elemento.
onmousemove -> Disparado quando o mouse é movido no elemento.
onmousedown -> Disparado quando o click do botão foi pressioando.
onmouseup -> Disparado quando o clique do botão é liberado.
onfocus -> Disparado quando o elemento recebe o foco. Válido para input, 
onchange -> Disparado quando existe uma mudança no conteúdo. "Ao mudar".
onblur -> Disparado quando o elemento perde o foco.
onkeydown -> Disparado quando uma tecla é pressionada.
onkeypress -> Disparado quando uma tecla é pressionada e solta.
onkeyup -> Disparado quando uma tecla é solte sobre um elemento.
onload -> Disparado quando a página terminou de ser carregada. Body.
onresize -> Disparado quando há um redimencionamento da janela.

*/ 


function eventoClick() {
    alert('Acionou um evento de click');
    document.body.style.backgroundColor = "yellow";
}

function eventoDblClick() {
    alert('Evento de clique deuplo');
}

function viraVermelho() {
    let div = document.getElementById("teste");
    div.style.backgroundColor = "red"
}

function viraAzul() {
    let div = document.getElementById("teste");
    div.style.backgrounColor = "blue"
}
function adicionaTexto() {
    let p = document.getElementById("texto");
    p.append('O mouse moveu<br>');
}