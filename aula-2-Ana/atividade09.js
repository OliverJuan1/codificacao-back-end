//  9) Em um código escreva seu nome completo e mostre:
let nomeCompleto = "Oliver Juan Rodrigues Dos Santos"; 

// a) Tamanho do nome

let tamanhoDoNome = nomeCompleto.length;
console.log("Tamanho do nome: " + tamanhoDoNome);

 // b) nome em maiúsculo 

 let nomeMaiusculo = nomeCompleto.toUpperCase();
 console.log("Nome em maiúsculo: " + nomeMaiusculo);
 

// c) nome em minúsculo

let nomeMinusculo = nomeCompleto.toLowerCase();
console.log("Nome em minúsculo: " + nomeMinusculo);

// d) verifique se contém a palavra “Soares”

let verificarSoares = nomeCompleto.includes("Soares");
console.log("Contem a palavra Soares? " + verificarSoares);

// e) substitua seu primeiro nome por “Desenvolvedor(a)”

let primeiroNome = nomeCompleto.split(" ")[0];
let novoNome = nomeCompleto.replace(primeiroNome, "Desenvolvedor(a)");
console.log("Novo nome: " + novoNome);
