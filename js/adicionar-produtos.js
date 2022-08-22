var largura = window.screen.width;

mostraBotao();

function mostraBotao() {

    if(largura >= 768 && largura < 1024) {
        
        document.getElementById("mostra-botao-tablet").classList.remove("invisivel");
    }

    if(largura >= 1024) {
        
        document.getElementById("mostra-botao-desktop").classList.remove("invisivel");
    }
}

const form = document.getElementById('adicionarProduto');
const produto = JSON.parse(localStorage.getItem("produto")) || [];

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const imagem = evento.target.elements['adicionar-imagem-produto'];
    const nome = evento.target.elements['nome-produto'];
    const preco = evento.target.elements['preco-produto'];
    const descricao = evento.target.elements['descricao-produto'];

    const produtoAtual = {
        "imagem": imagem.value,
        "nome": nome.value,
        "preco": preco.value,
        "descricao": descricao.value
    }

    produto.push(produtoAtual);

    localStorage.setItem("produto", JSON.stringify(produto));
    
    imagem.value = "";
    nome.value = "";
    preco.value = "";
    descricao.value = "";
});