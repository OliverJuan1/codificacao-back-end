class Usuario{
    nome;
    email;
    idade;

    constructor (nome, email, idade){
        this.nome = nome;
        this.email = email;
        this.idade = idade
    }

    // nome
    definirNome(nome) {
        this.nome = nome;
    }

    pegarNome() {
        return this.nome;
    }

    // email
    definirEmail(email) {
        this.email = email;
    }

    pegarEmail() {
        return this.email;
    }

    // idade
    definirIdade(idade){
        this.idade = idade;
    }

    pegarIdade(){
        return this.idade;
    }
}

module.exports = Usuario;