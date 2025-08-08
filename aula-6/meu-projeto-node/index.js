// atividade 1
console.log("Olá, Mundo do Node!");

const chalk = require('chalk');
console.log(chalk.green('Servidor iniciado com sucesso!'));

const soma = require('./utils/soma');
console.log("Resultado:", soma(5, 7));

const a = Number(process.argv[2]);
const b = Number(process.argv[3]);
console.log("Soma:", a + b);

const sub = require('./utils/subtracao');
console.log("Subtracao:", sub(5, 7));

const mult = require('./utils/multiplicacao');
console.log("Multiplicação:", mult(a, b));