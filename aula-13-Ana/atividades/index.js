import Usuario from "./Usuario.js";

const usuario1 = new Usuario("João Silva", "joao@exemplo.com", 30);
usuario1.definirNome("Oliver Juan");
let nomeUsuario = usuario1.pegarNome();
console.log(usuario1.pegarNome(nomeUsuario));


const usuario1Email = new Usuario("teste@exemplo.com");
usuario1Email.definirEmail("Oliver112121@gmail.com");
let emailUsuario = usuario1Email.pegarEmail();
console.log(usuario1Email.pegarEmail(emailUsuario));

const usuario1Idade = new Usuario(25);
usuario1Idade.definirIdade(30);
let idadeUsuario = usuario1Idade.pegarIdade();
console.log(usuario1Idade.pegarIdade(idadeUsuario));