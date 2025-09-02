import Pessoa from "./Pessoa.js";


const Pessoa1 = new Pessoa("Ana", 15, "1122233385");
Pessoa1.definirNome("Ronaldo");
let nomePessoa = Pessoa1.pegarNome();
console.log(Pessoa1.pegarNome(nomePessoa));