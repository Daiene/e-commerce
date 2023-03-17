const header = document.querySelector("header");
const main = document.querySelector("main");


header.insertAdjacentHTML("beforeend", `
    <div class="header">
        <h1>Fael Burguer</h1>
        <div class="opcoes">
            <nav>
                <ul>
                    <a href="">Quem somos</a>
                    <a href="">Promoções</a>
                    <a href="">Cardápio</a>
                    <a href="">Contato</a>
                    <a href="">Peça Aqui!</a>
                </ul>
            </nav>
        </div>
    </div> 
`)

main.insertAdjacentHTML("beforeend", `
    <div class="conteudo">
        <h1>Olá</h1>
    </div>
`)