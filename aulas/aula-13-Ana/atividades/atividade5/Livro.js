class Livro {
    constructor(titulo, autor, anoPublicacao, ) {
        this.titulo = titulo;
        this.autor = autor;
       
    }

    definirTitulo(titulo) {
        this.titulo = titulo;
    }
    pegarTitulo() {
        return this.titulo;
    }

    definirAutor(autor) {
        this.autor = autor;
    }
    pegarAutor() {
        return this.autor;
    }


}

module.exports = Livro;