const mongoose = require("mongoose");

const generoSchema = new mongoose.Schema({
  nombre: {
    type: String,
  },
  estado: {
    type: String,
    default: "Activo",
  },
  descripcion: {
    type: String,
  },
  fechaCreacion: {
    type: Date,
    default: Date.now,
  },
  fechaActualizacion: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Genero", generoSchema);
