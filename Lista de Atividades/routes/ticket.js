const express = require ('express')
const app = express();

app.use(express.json());

let tickets = [];

//listar todos
app.get('/ticket', (req, res) => {
    res.json(tickets);
});

//adicionar ticket
app.get('/ticket', (req, res) => {      
  const novoTicket  = {
    id: tickets.length + 1,
    ...req.body
  }
    tickets.push(novoTicket);
})

//PUT - atualizar ticket
app.put("ticket/:id", (req, res) => {
    const { id } = req.params;

    let ticket = tickets.find(t => t.id === id)

    if(ticket) {
        return res.status(404).json({ msg: "Ticket não encontrado"})
    }
    ticket = { ...ticket, ...req.body}
    tickets = tickets.map(t => (t.id === id ? ticket : t))
    res.json(ticket)
}) 

app.delete("/ticket/:id", (req, res) => {
    const { id } = req.params;
    tickets = tickets.filter(t => t.id != id)
    res.json({ msg: "Ticket atualizado com sucesso!"})
})

function middlewareValidarTicket(req, res, next) {
    const { titulo,prioridade, descricao, categoria, nomeSolicitante, departamento, telefone, email } = req.body;

    if(!titulo ){
        return res.status(400).json({ msg: "O título é obrigatório"})
    }

    //
    next();
}

module.exports = app;