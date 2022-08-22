const form = document.getElementById('novaMensagem');
const usuarios = JSON.parse(localStorage.getItem("usuarios")) || [];

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nome = evento.target.elements['nome'];
    const mensagem = evento.target.elements['mensagem'];

    const usuario = {
        "nome": nome.value,
        "mensagem": mensagem.value
    }

    usuarios.push(usuario);

    localStorage.setItem("usuarios", JSON.stringify(usuarios));
    
    nome.value = "";
    mensagem.value = "";
});
