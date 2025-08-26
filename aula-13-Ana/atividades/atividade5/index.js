import Livro from "./Livro.js";

const livro1 = new Livro("Diario de um Banana", "Jeff Kinney", 2007, "Infantil");
livro1.definirTitulo("Diario de um Banana 2");
let tituloLivro = livro1.pegarTitulo();
console.log(tituloLivro);  


const livro1Autor = new Livro("teste", "Jeff Kinney");
livro1Autor.definirTitulo("Diario de um Banana 3");
let autorLivro = livro1Autor.pegarAutor();
console.log(autorLivro);   