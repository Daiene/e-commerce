const header = document.querySelector("header");
const main = document.querySelector("main");


header.insertAdjacentHTML("beforeend", `
    <div class="header">
        <h1>Fael Burguer</h1>
        <div class="opcoes">
            <nav>
            <ul>
                <li><a href="#">
                    <p>Quem somos</p>
                </a></li>
                <li><a href="">
                    <p>Promoções</p>
                </a></li>
                <li><a href="">
                    <p>Cardápio</p>
                </a></li>
                <li><a href="">
                    <p>Contato</p>
                </a></li>
                <li><a href="">
                    <p>Peça Aqui!</p>
                </a></li>
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