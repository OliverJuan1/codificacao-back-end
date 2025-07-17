// 8) Crie uma verificação onde se a pessoa tiver ingresso ou estiver na lista VIP, ela poderá entrar no evento

function verificarIngresso(temIngresso, estaNaListaVip){
    if (temIngresso || estaNaListaVip) {
        return "Pode entrar no evento.";
      } else {
        return "Não pode entrar no evento.";
      }
}

let temIngresso = false
let estaNaListaVip =  true

let resultado = verificarIngresso(temIngresso, estaNaListaVip);
console.log(resultado);