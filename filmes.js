function adicionarFilme() {
    var filmeFavorito = document.querySelector("input#filme").value;

    if (filmeFavorito.endsWith(".jpg")) {
        listarFilmesNaTela(filmeFavorito); //funcão que recebe
        // guardarFilme(filmeFavorito);
        // nomeDoFilme(filmeFavorito)
        RemoverFilme(filmeFavorito)
            //Inserir um campo com o nome do filme
            // Adcionar um button
            //guardar os filmes em uma lista com o uso de FOR
    } else {
        var elemenetoListaFilmes = document.querySelector("div#listaFilmes");
        elemenetoListaFilmes.innerHTML =
            "Endereço inválido! verifique-o e tente novamente";
    }
}

function listarFilmesNaTela(filme) {
    //envia
    console.log(filme);
    var elementoFilmeFavorito = "<img src=" + filme + ">";
    var elemenetoListaFilmes = document.querySelector("div#listaFilmes");

    elemenetoListaFilmes.innerHTML =
        elemenetoListaFilmes.innerHTML + elementoFilmeFavorito;
}

function guardarFilme(filme) {

}

function nomeDoFilme() {
    var input = document.createElement('input')
    input.type = 'text'
    input.className = Text
    container.appendChip(input)
}

function removerFilme() {
    var removerFilme = document.querySelector("div#listaFilmes").value

    removerFilme.innerHTML = ''
}