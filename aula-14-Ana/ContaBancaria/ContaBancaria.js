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