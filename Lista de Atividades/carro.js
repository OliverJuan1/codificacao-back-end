// 18. Crie uma classe Carro com atributos marca, modelo, ano.
// a) Adicione métodos
// - ligar() -> retorna “Carro ligado”.
// - desligar() retorna “Carro desligado”.
// b) Instancie 3 carros diferentes e exiba o resultado

class Carro {  
    constructor(marca, modelo, ano) {
        this.marca = marca;
        this.modelo = modelo;
        this.ano = ano;
    }
    setMarca(marca) {
        this.marca = marca;
    }
    setModelo(modelo) {
        this.modelo = modelo;
    }
    setAno(ano) {
        this.ano = ano;
    }

    ligar() {
        return "Carro ligado";
    }
    desligar() {
        return "Carro desligado";
    }

    getMarca() {
        return this.marca;
    }
    getModelo() {
        return this.modelo;
    }
    getAno() {
        return this.ano;
    }   
}

