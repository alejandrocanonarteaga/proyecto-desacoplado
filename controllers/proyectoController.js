const Proyecto = require('../models/proyectoModel');

// Controladores CRUD

// Obtener todos los proyectos
exports.getAllProyectos = async (req, res) => {
  try {
    const proyectos = await Proyecto.find();
    res.json(proyectos);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Obtener un proyecto por su número
exports.getProyectoByNumero = async (req, res) => {
  try {
    const proyecto = await Proyecto.findOne({ numero: req.params.numero });
    res.json(proyecto);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Crear un nuevo proyecto
exports.createProyecto = async (req, res) => {
  const proyecto = new Proyecto(req.body);
  try {
    const nuevoProyecto = await proyecto.save();
    res.status(201).json(nuevoProyecto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Actualizar un proyecto por su número
exports.updateProyecto = async (req, res) => {
  try {
    const proyecto = await Proyecto.findOneAndUpdate(
      { numero: req.params.numero },
      req.body,
      { new: true }
    );
    res.json(proyecto);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// Eliminar un proyecto por su número
exports.deleteProyecto = async (req, res) => {
  try {
    await Proyecto.deleteOne({ numero: req.params.numero });
    res.json({ message: 'Proyecto eliminado correctamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
