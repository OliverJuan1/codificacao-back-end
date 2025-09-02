// 3) Use switch para imprimir o dia da semana com base em um número de 1 a 7

function diaDaSemana(numero) {
    switch (numero) {
      case 1:
        return "Domingo";
      case 2:
        return "Segunda-feira";
      case 3:
        return "Terça-feira";
      case 4:
        return "Quarta-feira";
      case 5:
        return "Quinta-feira";
      case 6:
        return "Sexta-feira";
      case 7:
        return "Sábado";
      default:
        return "Número inválido. Digite um número entre 1 e 7.";
    }
  }

  let numeroDoDia = 3;
  let dia = diaDaSemana(numeroDoDia);
  console.log("O dia " + numeroDoDia + " é: " + dia);
