// EXEMPLO OPERADOR SPREAD COM OBJ
const dadosAdicionais = {
    rua: "tal de tal",
    numero: 200
}



// PODE SER UTILIZADO PARA DESESTRUTURAR ARRAYS E OBJETOS
const pessoa = {
    name: "Oliver",
    idade: 16,
    ...dadosAdicionais
}

console.log(pessoa)
