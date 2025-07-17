// 5) Crie um array com 4 frutas. Adicione uma nova fruta, remova a última, e exiba o array final com as frutas separadas por vírgula.

let frutas = ["Maçã", "Graviola", "Acerola", "Uva"];

frutas.push("limão");

frutas.pop();

console.log("Frutas:" + frutas.join(", "))

