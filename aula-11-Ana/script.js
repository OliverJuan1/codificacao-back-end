const cep = '88032200';

fetch(`https://viacep.com.br/ws/${cep}/json/`)
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(err => console.log(err))





// ######################################################3


// Funcao que ler os dadosdo arquivo
function lerDados(arquivo) {
    // Retorna os dados CONVERTIDOS PARA OBJETO
    return JSON.parse(fs.readFile(arquivo, 'utf-8'));
}
// salva os dados no arquivo
function salvarDados(arquivo, dados) {
    // USA A FUNCAO DE ESCREVER NO ARQUIVO, PASSANDO COMO PARAMETROS O ARQUIVO E UM METODO QUE CONVERTE PARA JSON
    fs.writeFileSync(arquivo, JSON.stringify(dados, null, 2));
}

// CRIAR NOSSO SERVIDOR COM NODE

const http = require(http);
const { error } = require('console');
const fs = require('fs');
const port = 3000;

const server = http.createServer((req, res) => {
    // Define o conteudo da resposta
    res.setHeader("Content-type", "application/json");

    if (req.method === "GET" && req.url === '/dados') {
        const dados = lerDados('usuarios.json');  //retorna os dados do json
        res.writeHead(200);
        res.end(JSON.stringify(dados));
    } else if (req.method === "POST" && req.url === "/dados") {
        let body = '';
        // É um evento que escuta quando os dados chegam
        req.on('data', chunk => {
            body += chunk.toString();
        });

        req.on('end', () => {
            try {
                const novoDado = JSON.parse(body)
                // lê o JSON existente 
                const dados = lerDados('usuarios.json');

                // gera o id
                novoDado.id = 99

                // adiciona o novo dados no json
                dados.push(novoDado);

                salvarDados('usuariois.json', dados);

                res.writeHead(201); // responde ao cliente com status 201(criado com sucesso)
                res.end("Dados adicionados com sucesso.")

            } catch (error) {
                console.log("Ocorreu um erro:", error);
                res.writeHead(400);
            }
        })
    } else {
        res.writeHead(404);
        res.end("Página não existe.s")
    }
});

server.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}`);
});

const url = `http://localhost:${port}/dados`;

const objNovoDado = {
    nome: "Oliver",
    idade: 19,
    salario: 200.000,
    id: 99
}

fetch(url, {
    method: "POST",
    headers: {
        'content-type': 'application/json'
    },
    body: JSON.stringify(objNovoDado)
})
    .then(response => {
        if (!response)
            console.log("Error");

        return response.json();
    })
    .then(data => console.log("Resposta do servidor: ", data));
    .catch()