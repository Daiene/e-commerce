const header = document.querySelector("header");
const main = document.querySelector("main");


header.insertAdjacentHTML("beforeend", `
    <div class="header">
        <h1>Fael Hamburguer</h1>
        <div class="opcoes">
            <a href="">Início</a>
            <a href="">Faça seu Pedido</a>
            <a href="">Nossos Princípios</a>
            <a href="">Fale Conosco</a>
        </div>
    </div>
`)

main.insertAdjacentHTML("beforeend", `
    <div class="conteudo">
        <h1>Olá</h1>
    </div>
`)