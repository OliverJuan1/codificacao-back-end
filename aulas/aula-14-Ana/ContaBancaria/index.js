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