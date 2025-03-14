const Tarea = require("../models/tareaModel");

const getTareas = async (req, res) => {
    try {
        const tareas = await Tarea.find({});
        res.json(tareas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTareasCompletadas = async (req, res) => {
    try {
        const tareas = await Tarea.find({ status: true });
        res.json(tareas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const getTareasPendientes = async (req, res) => {
    try {
        const tareas = await Tarea.find({ status: false });
        res.json(tareas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createTarea = async (req, res) => {
    try {
        const nuevaTarea = new Tarea(req.body);
        const result = await nuevaTarea.save();
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteTarea = async (req, res) => {
    try {
        const result = await Tarea.findByIdAndDelete(req.params.id);
        res.json(result);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    getTareas,
    getTareasCompletadas,
    getTareasPendientes,
    createTarea,
    deleteTarea
};