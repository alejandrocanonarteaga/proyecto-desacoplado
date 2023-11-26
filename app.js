const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const proyectoRoutes = require('./routes/proyectoRoutes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.MONGODB_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

// Rutas del módulo "Proyecto"
app.use('/proyectos', proyectoRoutes);

app.listen(PORT, () => {
  console.log(`Servidor en el puerto ${PORT}`);
});
