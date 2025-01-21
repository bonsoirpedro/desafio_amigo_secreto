let listaAmigos = [];

function adicionarAmigo() {
    inserirAmigo = document.querySelector('input');
    if (inserirAmigo.value === '') { // se o campo de input estiver vazio
        alert('Digite um nome para adicionar a lista de amigos.');
        return;
    } else{
        let amigo = inserirAmigo.value;
        listaAmigos.push(amigo);
        limparCampo(); // chama a função para limpar o campo de input
        exibirListaNaTela(); // chama a função para exibir a lista na tela; tive um pequeno contra-tempo pois eu estava chamando a função fora :3
    }
}

function exibirListaNaTela() {
    let lista = document.querySelector('ul'); 
    lista.innerHTML = '';
    for (amigo of listaAmigos) { // para cada amigo da lista de amigos
        let itemLista = document.createElement('li'); // cria um novo item <li>
        itemLista.textContent = amigo; // adiciona o nome do amigo ao item <li>
        lista.appendChild(itemLista); // adiciona o item <li> à lista <ul>
    }
}

function limparCampo() {
    inserirAmigo = document.querySelector('input');
    inserirAmigo.value = '';
}

function sortearAmigo() {
    if (listaAmigos.length === 0) {
        alert('Adicione amigos à lista antes de sortear um amigo.');
        return;
    }
    let amigoSorteado = listaAmigos[Math.floor(Math.random() * listaAmigos.length)];
    let mensagem = document.querySelector('ul');
    mensagem.textContent = `O amigo sorteado foi: ${amigoSorteado}!!!`;
}