// 6 Implemente uma classe Livro com título e autor privados, e um método exibirInfo().

class Livro {
    #titulo;
    #autor;

    constructor(titulo, autor) {
        this.#titulo = titulo;
        this.#autor = autor;
    }

    setTitulo(titulo) {
        this.#titulo = titulo;
    }

    getTitulo() {
        return this.#titulo;
    }

    setAutor(autor) {
        this.#autor = autor;
    }

    getAutor() {
        return this.#autor;
    }

    exibirInfo() {
        return `Título: ${this.#titulo}, Autor: ${this.#autor}`;
    }
}

const livro1 = new Livro("Diario de um Banana", "Jeff Kinney");
let infoLivro = livro1.exibirInfo();
console.log(infoLivro); 