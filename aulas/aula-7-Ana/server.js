const http = require("http"); // modulo interno no node
const port = 3000; // porta onde o node/servidor irá rodar

const server = http.createServer((req, res) => {
    res.writeHead(200), {"Content-type" : "text/plain"}; // define o cabecalho
    res.write("Olá, servidor em Nodejs esta funcionando:"); // Corpo
    res.end(); // Finalizar
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

//lendo arquivos

const fs = require("fs");// importando modulo interno do node chamado File System
// fs.readFile('dados.txt','utf-8', (err, data) => {
//     if(err) //Se der erro ira aparecer no console
//         console.log('Erro', err);

//     console.log(data); // nessa linha irá mostrar os dados do meu arquivo "dados.txt"
// });

// Escrevendo no Arquivo
fs.writeFile('dados.txt', 'Ola pessoal!!!  ', (erro) => {
    if(erro)
        console.log("Houve um erro" + erro)

    console.log('Arquivo salvo com sucesso')
})

fs.appendFile("dados.txt","Linha Acrescentada!!!! acaba logoo", (err) => {
    if(err)
        console.log('Erro:', err)

    console.log('Linha adicionada com sucesso.')
})
