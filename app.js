//O principal objetivo deste desafio é fortalecer suas habilidades em lógica de programação. Aqui você deverá desenvolver a lógica para resolver o problema.
let listaAmigos = [];

function adicionarAmigo() {
    inserirAmigo = document.querySelector('input');
    if (inserirAmigo.value === '') {
        alert('Digite um nome para adicionar a lista de amigos.');
        return;
    } else{
        let amigo = inserirAmigo.value;
        listaAmigos.push(amigo);
        limparCampo();
        console.log(listaAmigos);
    }
}

function limparCampo() {
    inserirAmigo = document.querySelector('input');
    inserirAmigo.value = '';
}