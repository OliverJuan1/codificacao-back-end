// 7) Crie uma verificação onde se a pessoa tem mais de 16 anos e se possui título de eleitor exiba “Tem o direito de votar.”.

function verificar(idade, possuiTitulo) {
    if (idade >= 16 && possuiTitulo) {
      console.log("Tem o direito de votar.");
    } else {
      console.log( "Não tem o direito de votar.");
    }
  }
  
  let idade = 17;
  let possuiTitulo = true; 
  
  let resultado = verificar(idade, possuiTitulo);
  console.log(resultado);
