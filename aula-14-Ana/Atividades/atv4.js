class ContaBancaria {
    #saldo;
    constructor(saldoInicial) {
        this.#saldo = saldoInicial;
    }
    // metodo depositar é o GET
    depositar(valor) {
        if (valor > 0) {
            this.#saldo += valor;

        }
    }
    // metodo sacar é o SET
    sacar(valor) {
        if (valor <= this.#saldo)
            this.#saldo = this.#saldo - valor;
    }
    getExtrato() {
        return this.#saldo;
    }
}
module.exports = ContaBancaria;


import ContaBancaria from "./ContaBancaria.js";

let saldoInicial = 100000;
const contaBancaria = new ContaBancaria(saldoInicial); // instanciando a classe

// depositando 5 milhoes
contaBancaria.depositar(20000);
let extrato = contaBancaria.getExtrato();
console.log("Meu saldo é:", extrato);

contaBancaria.sacar(5000);
console.log("Meu saldo é:", contaBancaria.getExtrato());

// ira ficar com 115 mil reais de resto na conta