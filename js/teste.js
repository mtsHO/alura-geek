const secaoProdutos = document.getElementById('secaoProdutos');


function criarElemento(produto) {  
    const produtoCartao = document.createElement('div');
    produtoCartao.classList.add("produtos__cartao");

    const imagemProduto = document.createElement('img');
    imagemProduto.classList.add("produtos__cartao__img");
    imagemProduto.innerHTML = produto.imagem;

    const produtoCorpo = document.createElement('div');
    produtoCorpo.classList.add('produtos__corpo');
    
    produtoCartao.appendChild(imagemProduto);
    produtoCartao.appendChild(produtoCorpo);

    const nomeProduto = document.createElement('h4');
    nomeProduto.classList.add('produtos__cartao__titulo');
    nomeProduto.innerHTML = produto.nome;

    const precoProduto = document.createElement('p');
    precoProduto.classList.add('produtos__cartao__valor');
    precoProduto.innerHTML = produto.preco;

    const codigoProduto = document.createElement('p');
    codigoProduto.classList.add('produtos__cartao__identificador');

    produtoCorpo.appendChild(nomeProduto);
    produtoCorpo.appendChild(precoProduto);
    produtoCorpo.appendChild(codigoProduto);

    secaoProdutos.appendChild(produtoCartao);
}