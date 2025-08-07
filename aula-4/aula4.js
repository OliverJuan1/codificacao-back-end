// // // // Funções Tradicionais
// // // // function concatenacaoPalavras(a, b){
// // // //     return a + ' - ' + b //Ana - Beatriz
// // // // }

// // // // //Funções anonimas
// // // // let saudacao = function () {
// // // //     console.log("Oi pessoal")
// // // // }

// // // // concatenacaoPalavras("Vitor", "Moreira");
// // // // saudacao();


// // // // // let saudacao = function () {
// // // // //     console.log("Oi pessoal")
// // // // // }

// // // // //Arrow function
// // // // const saudacao1 = () => {
// // // //     console.log("Oi pessoal")
// // // // }

// // // // // Essa função tradicional
// // // // function somar (a,b){
// // // //     return a + b;
// // // // }

// // // // // é equivalente a essa função arrow function
// // // // const somar = (a,b) => a+b


// // // // //Diferença do this entre arrow function e funções tradicionais
// // // // // Arrow function NÃO POSSO UTILIZAR O THIS
// // // // // FUNÇÃO NORMAL POSSO UTILIZAR O THIS

// // // // const obj = {
// // // //     nome : "Ana",
// // // //     idade: 15,
// // // //     saudacao: () => {
// // // //         console.log("Oi" + this.nome)
// // // //         console.log("Oi" + obj.nome)
// // // //     }
// // // // }

// // // // //Função Callback
// // // // function executar (a,b,c,d, funcaoCallback) {
// // // //     console.log ("Antes");
// // // //     funcaoCallback();
// // // //     console.log("Depois");
// // // // }

// // // // executar(() =>console.log("Executando!!!"))

// // // // // Resultado do Código
// // // // // Antes
// // // // // Executando
// // // // // Depois

// // // // // Função sincrona

// // // // function sincrona () {
// // // //     console.log("Vai executar essa linha primeiro");
// // // //     console.log("Depois essa linha");
// // // //     console.log("E depois essa linha");

// // // // }
// // // // sincrona();

// // // function teste () {
// // //     console.log("a");
// // //     setTimeout(() => {
// // //         console.log("b")
// // //     }, 2000);
// // //     console.log("c")
// // // }
// // // teste();


// // // Funções que retornam outras funções

// // function saudacao (nome) {
// //     return function(mensagem) {
// //         console.log(`${mensagem}`, `${nome}`);
// //     }
// // }

// // const msgParaLuzia = saudacao("Oliver");
// // msgParaLuzia("Fala Comigo");

// // function saudacao (nome, mensagem) {
// //     return function(mensagem) {
// //         console.log(`${mensagem}`, `${nome}`);
// //     }
// // }

// // funções assincronas
// function esperar() {
//     return new Promise(resolve => {
//         setTimeout(() => {
//             console.log('Demorou, mas chegou :D');
//         }, 5000);
//     })
// }

// // Toda vez que eu fizer uma funcao assincrona
// // eu preciso utilizar o await
// async function executar() {
//     console.log('Executando...');
//     const resultado = await esperar();
//     console.log(resultado);
//     console.log("Finalizado");
// }
// executar();

// function teste() {
//     console.log("a");
//     setTimeout(() => {
//         console.log("b")
//     }, 10000);
//     console.log("c")
// }
// teste();

let carro = {
    nome: "Honda Civic da Ana Beatriz",
    marca:"Honda",
    modelo: "Civic",
    ano: 2025,
    atributos: ["som", "camera de re", "teto solar", "escapamento", "antena"]
}
console.log(carro.ano);
console.log(carro.atributos[2]);

carro.color = "Preto com Vermelho";

// Alterar
carro.nome = "Honda Civic 2025";