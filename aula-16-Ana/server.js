 //Arquivo de configuração do servidor

const express = require('express'); // importando um modulo externo para meu projeto; cria instancia do express
const app = express();
const port = 3000; 

const usuarioRouter = require('./src/routes/usuarios'); 
app.use('/', usuarioRouter);

app.use(express.json()); // permite que o servidor leia os dados em JSON enviados pelo corpo da requisição



app.get('/', (req, res) => {
    res.send('Olá Pessoal, estou no navegador');
})

// iniciar o servidor
app.listen(port, () => {
    console.log(`Servidor rodando na porta ${port}. Abra http://localhost:${port} no navegador`);
});