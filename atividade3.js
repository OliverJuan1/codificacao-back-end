// 3. Solicite ao usuário que digite um CPF e verifique se ele tem exatamente 11 digitos. Caso contrario, exiba uma mensagem personalidade explicando o erro

// Entrada
let cpf = prompt("Digite o numero do CPF do usuario");

// Convertendo para string
let strCpf = String(cpf);

// Verifica se a variavel tem o tamanho 11
if (cpf.length == 11) {
    alert('Perfeito!')
}
// contrario do IF - senão (senão fizer o bloco do IF, ele vem pro else)
else {
    alert("Opa, parceiro! seu cpf está faltando digito")
}
