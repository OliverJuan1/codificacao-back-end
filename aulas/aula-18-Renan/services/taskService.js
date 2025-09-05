const express = require('express');

let tasks = [
    { id: 1, title: "Estudar Apis", done: false },
    { id: 2, title: "Praticar Criação de Apis", done: true }
];


// Regras de negócio
// o titulo é obrigatório
// não pode haver titulo duplicado
// so e possível marcar como feita uma tarefa que exista
// nao e permitiso atualizar  ou excluir uma tarefa inexistente
// nao e permitido excluir uma tarefa concluida


const getAll = () => tasks;

const getById = (id) => {
    const task = tasks.find(t => t.id === id);
    if (!task) throw { status: 404, message: "Tarefa não encontrada" };
    return task;
}

module.exports = { getAll, getById };
