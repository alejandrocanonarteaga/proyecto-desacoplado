const mongoose = require('mongoose');

const proyectoSchema = new mongoose.Schema({
  numero: { type: Number, unique: true, required: true },
  titulo: { type: String, required: true },
  fechaInicio: { type: Date, required: true },
  fechaEntrega: { type: Date, required: true },
  valor: { type: Number, required: true },
  fechaCreacion: { type: Date, default: Date.now },
  fechaActualizacion: { type: Date, default: Date.now },
  cliente: { type: String, required: true },
  tipoProyecto: { type: String, required: true },
  universidad: { type: String, required: true },
  etapa: { type: String, required: true },
});

const Proyecto = mongoose.model('Proyecto', proyectoSchema);

module.exports = Proyecto;
