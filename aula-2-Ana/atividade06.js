// 6) Verifique se duas variáveis x = “50” e y = 50 têm o mesmo valor usando == e depois usando ===. Mostre os resultados e explique a diferença.

let x = "50"; 
let y = 50;  

// Usando == (igualdade Flexivel)
let igualdadeFlexivel = (x == y);
console.log("x == y: " + igualdadeFlexivel); 

// Usando === (igualdade estrita)
let igualdadeEstrita = (x === y);
console.log("x === y: " + igualdadeEstrita);   

// Explicação
console.log("Diferença entre == e ===");
console.log("== (igualdade Flexivel)  Compara apenas o valor. Converte os tipos automaticamente se forem diferentes.");
console.log("=== (igualdade estrita)  Compara o valor e tipo. Não converte nada automaticamente.");