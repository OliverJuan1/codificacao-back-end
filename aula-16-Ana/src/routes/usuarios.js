const express = require('express');
const router = express.Router();
const db = require('../config/db');


//ROTA GET - RETORNA TODOS OS USUÁRIOS
router.get('/', async (req, res) => {
    try {
        const [rows] = await db.query('SELECT id,nome, email FROM usuarios');
        res.json(rows);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).json({ error: "Erro ao buscar usuários" });
    }
})

module.exports = router;