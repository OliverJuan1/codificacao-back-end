// 5 Crie uma classe Aluno com nome e nota como atributos privados. Crie um método que retorna se o aluno foi aprovado (nota >= 7).

class Aluno {
    #nome;
    #nota;

    constructor(nome, nota) {
        this.#nome = nome;
        this.#nota = nota;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    getNome() {
        return this.#nome;
    }

    setNota(nota) {
        if (nota >= 0 && nota <= 10) {
            this.#nota = nota;
        }
    }

    getNota() {
        return this.#nota;
    }

    estaAprovado() {
        return this.#nota >= 7 ? "Aprovado" : "Reprovado";
    }
}

const aluno1 = new Aluno("Oliver", 4);
let nomeAluno = aluno1.getNome();
let notaAluno = aluno1.getNota();
let statusAluno = aluno1.estaAprovado();
console.log(`Aluno: ${nomeAluno}, Nota: ${notaAluno}, Status: ${statusAluno}`);