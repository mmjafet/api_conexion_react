const express = require('express');
const {
    getTareas,
    getTareasCompletadas,
    getTareasPendientes,
    createTarea,
    deleteTarea
} = require('../Controller/tareasController');

const router = express.Router();

router.get('/tareas', getTareas);
router.get('/tareas/completadas', getTareasCompletadas);
router.get('/tareas/pendientes', getTareasPendientes);
router.post('/tareas', createTarea);
router.delete('/tareas/:id', deleteTarea);

module.exports = router;