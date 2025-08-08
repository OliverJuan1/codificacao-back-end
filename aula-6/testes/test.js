// EXEMPLO OPERADOR SPREAD COM OBJ
const dadosAdicionais = {
    rua: "tal de tal",
    numero: 200
}


const pessoa = {
    name: "Oliver",
    idade: 16,
    ...dadosAdicionais
}

console.log(pessoa)

// PODE SER UTILIZADO PARA DESESTRUTURAR ARRAYS E OBJETOS