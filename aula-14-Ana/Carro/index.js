import Carro from "./Carro.js";

const objCarro = new Carro();
let nome = objCarro.nome;
console.log(objCarro);

const objCarro2 = new Carro(); // instaciando minha classe
    objCarro2.definirNomeChassi("123456"); // definindo o nome do meu chassi
    let chassi = objCarro2.pegarNomeChassi(); // aqui estou capturando o nome do meu chassi
    console.log(chassi); // mostra o nome do chassi
