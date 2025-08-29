// 1 Crie uma classe Pessoa com atributos privados nome e idade, e métodos públicos para acessar e alterar esses valores

class Pessoa {
    #nome;
    #idade;

    constructor(nome, idade) {
        this.#nome = nome;
        this.#idade = idade;
    }

    setNome (nome) {
        this.#nome = nome;
    }

    getNome () {
        return this.#nome;
    }

    setIdade (idade) {
        this.#idade = idade;
    }

    getIdade () {
        return this.#idade;
    }
}


const pessoa1 = new Pessoa("Juan", 15);
let nome = pessoa1.getNome();
let idade = pessoa1.getIdade();
console.log(`${nome}, ${idade}`);

pessoa1.setNome("Oliver");
pessoa1.setIdade(16);
nome = pessoa1.getNome();
idade = pessoa1.getIdade();
console.log(`${nome}, ${idade}`);
