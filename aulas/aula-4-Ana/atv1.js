//  Crie uma funcao criarCalculadora(operador) que retorne outra funcao capaz de realizar a aperacao com dois numeros. exemplo de uso:   

// const somar = criarCalculadora('+');
// console.log(somar(5, 3));

function criarCalculadora(operador) {
    return function(a, b) {
        switch (operador) {
            case '+':
                return a + b;
                break;
            case '-':
                return a - b;
                break;
            case '*':
                return a * b;
                break
            case '/':
                if (b !== 0) {
                    return a / b;
                } else {
                    return 'Erro: Divisão por zero';
                }
            default:
                return 'Operador inválido';
        }
    };
}


const somar = criarCalculadora('+');
console.log(somar(5, 3)); // Saída: 8

const subtrair = criarCalculadora('-');
console.log(subtrair(5, 3)); // Saída: 2

const multiplicar = criarCalculadora('*');
console.log(multiplicar(5, 3)); // Saída: 15

const dividir = criarCalculadora('/');
console.log(dividir(5, 0)); // Saída: Erro: Divisão por zero
