const express = require('express');
const mongoose = require('mongoose');
const { connectDB } = require('../data/config');
const Tarea = require('../models/tareaModel');

const app = express();
const port = 3001;

connectDB();

app.use(express.json());

app.get('/tareas', async (req, res) => {
    try {
        const tareas = await Tarea.find({});
        res.json(tareas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/tareas/completadas', async (req, res) => {
    try {
        const tareas = await Tarea.find({ status: true });
        res.json(tareas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.get('/tareas/pendientes', async (req, res) => {
    try {
        const tareas = await Tarea.find({ status: false });
        res.json(tareas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.post('/tareas', async (req, res) => {
    try {
        const nuevaTarea = new Tarea(req.body);
        const result = await nuevaTarea.save();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.delete('/tareas/:id', async (req, res) => {
    try {
        const result = await Tarea.findByIdAndDelete(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(port, () => {
    console.log(`API listening at http://localhost:${port}`);
});