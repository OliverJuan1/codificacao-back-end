// 4 Implemente uma classe Carro com atributos privados marca e velocidade. Adicione método para acelerar e frear.

class Carro {
    nome; //public
    ano; // public
    modelo; // public
    #chassi; // atributo privado
    constructor(nome, ano, modelo, chassi){
        this.nome = nome;
        this.ano = ano;
        this.modelo = modelo;
        this.#chassi = chassi
    }

    definirNomeChassi(chassi){
        this.#chassi = chassi;
    }

    pegarNomeChassi(){
        return this.#chassi;
    }
}

const objCarro = new Carro();
let nome = objCarro.nome;
console.log(objCarro);

const objCarro2 = new Carro(); // instaciando minha classe
    objCarro2.definirNomeChassi("123456"); // definindo o nome do meu chassi
    let chassi = objCarro2.pegarNomeChassi(); // aqui estou capturando o nome do meu chassi
    console.log(chassi); // mostra o nome do chassi