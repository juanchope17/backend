const mongoose = require('mongoose');

const productoraSchema = new mongoose.Schema({
    nombre: {
        type: String

    },
    estado: {
        type: String,
        default: 'Activo'
    },
    fechaCreacion: {
        type: Date,
        default: Date.now,
        // unique: true
    },
    fechaActualizacion: {
        type: Date,
        default: Date.now
    },
    slogan: String,
    
    descripcion: String,
});

module.exports = mongoose.model('Productora', productoraSchema);
