// 2)  Crie um sistema de notas. Se a nota for maior ou igual a 9, mostre "Excelente". Se for entre 6 e 8, "Aprovado". Caso contrário, "Reprovado".

function avaliarNota(nota) {
    if (nota >= 9) {
      return "Excelente";
    } else if (nota >= 6 && nota <= 8) {
      return "Aprovado";
    } else {
      return "Reprovado";
    }
  }
  
  
  let nota = 8;
  let resultado = avaliarNota(nota);
  console.log("A nota é " + nota + " e o resultado é: " + resultado);