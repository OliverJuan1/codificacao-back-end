// 3 Crie uma classe Produto com atributos privados nome e preco. Implemente métodos get e set para ambos.

class Produto {
    #nome;
    #preco;

    constructor(nome, preco) {
        this.#nome = nome;
        this.#preco = preco;
    }

    setNome(nome) {
        this.#nome = nome;
    }

    getNome() {
        return this.#nome;
    }

    setPreco(preco) {
        if (preco >= 0) {
            this.#preco = preco;
        }
    }

    getPreco() {
        return this.#preco;
    }
}

const Produto1 = new Produto("Notebook", 5000);
let nome = Produto1.getNome();
let preco = Produto1.getPreco();
console.log(` ${nome},  R$${preco}`);