// 8) Crie uma verificação onde se a pessoa tiver ingresso ou estiver na lista VIP, ela poderá entrar no evento

let temIngresso = false
let estaNaListaVip =  true

let resultado = verificarIngresso(temIngresso, estaNaListaVip);
console.log(resultado);

function verificarIngresso(temIngresso, estaNaListaVip){
    if (temIngresso || estaNaListaVip) {
       console.log("Pode entrar no evento.");
      } else {
        console.log("Não pode entrar no evento.");
      }
}