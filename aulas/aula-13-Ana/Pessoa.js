class Pessoa{
    // Atributos da classe pessoa
    nome;
    carroFavorito;
    dna;
    idade;
    cpf;
    doencas;
    cep;
    peso;

    constructor (nome, idade, cpf){
        this.nome = nome;
        this.idade = idade;
        this.cpf = cpf;
 
    }

    definirNome(nome) {
        this.nome = nome;
    }

    pegarNome() {
        return this.nome;
    }
}

module.exports = Pessoa;