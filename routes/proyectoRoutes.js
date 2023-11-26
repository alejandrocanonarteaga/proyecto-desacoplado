const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');

// Rutas CRUD para el módulo "Proyecto"

// Obtener todos los proyectos
router.get('/', proyectoController.getAllProyectos);

// Obtener un proyecto por su número
router.get('/:numero', proyectoController.getProyectoByNumero);

// Crear un nuevo proyecto
router.post('/', proyectoController.createProyecto);

// Actualizar un proyecto por su número
router.put('/:numero', proyectoController.updateProyecto);

// Eliminar un proyecto por su número
router.delete('/:numero', proyectoController.deleteProyecto);

module.exports = router;
