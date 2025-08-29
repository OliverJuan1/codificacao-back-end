class Aluno {
    #nome;
    #nota;

    constructor(nome, nota) {
        this.#nome = nome
        this.#nota = nota
    }
    setNome(nome) {
        this.nome = nome
    }

    getNome() {
        return this.#nome
    }

    setNota(nota) {
        if (nota < 0 || nota > 10) {
            this.nota = nota;
        }
    }

    getNota() {
        return this.#nota
    }


}
module.exports = Aluno;