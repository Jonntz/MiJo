// Variável para rastrear em qual página estamos (começa na 0, que é a capa)
let paginaAtual = 0;
// Conta o total de páginas (nesse caso, 4 páginas: de 0 a 3)
const totalPaginas = 4;

// Função para iniciar o livro e tocar a música
function abrirLivro() {
    // 1. Tentar dar play na música
    let musica = document.getElementById("musica-fundo");
    musica.play(); // O play só funciona porque o usuário clicou no botão!

    // 2. Avançar para a página de conteúdo
    mudarPagina(1);
}

// Função para avançar ou voltar páginas
function mudarPagina(direcao) {
    // Esconde a página atual removendo a classe "ativa"
    document.getElementById("pag-" + paginaAtual).classList.remove("ativa");

    // Atualiza o número da página (somando 1 para avançar ou subtraindo 1 para voltar)
    paginaAtual = paginaAtual + direcao;

    // Mostra a nova página adicionando a classe "ativa"
    document.getElementById("pag-" + paginaAtual).classList.add("ativa");
}

// Função para fechar o livro (voltar para a capa e pausar a música)
function fecharLivro() {
    let musica = document.getElementById("musica-fundo");
    musica.pause(); // Pausa a música
    musica.currentTime = 0; // Volta a música para o início

    // Esconde a página atual
    document.getElementById("pag-" + paginaAtual).classList.remove("ativa");
    
    // Volta para a capa (página 0)
    paginaAtual = 0;
    document.getElementById("pag-" + paginaAtual).classList.add("ativa");
}