// 10) Crie um sistema simples de login. O usuário só entra se o email não estiver vazio e a senha tiver pelo menos 6 caracteres

function verificarLogin(email, senha) {
    if (email !== "" && senha.length >= 6) {
      return "Login bem-sucedido!";
    } else {
      return "Email ou senha inválidos.";
    }
  }
  
  // Exemplo de uso:
  let email = "atividade10@exemplo.com"; 
  let senha = "123456"; 
  
  let resultado = verificarLogin(email, senha);
  console.log(resultado);