const mongoose = require('mongoose');

const directorSchema = new mongoose.Schema({

    nombre: {
        type: String,

    },
    estado: {
        type: String,
        default: 'Activo'
    },

    fechaCreacion: {
        type: Date,
        default: Date.now
    },

    fechaActualizacion: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Director', directorSchema);