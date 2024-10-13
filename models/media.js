const mongoose = require('mongoose');

const mediaSchema = new mongoose.Schema({
    title: {
        type: String,
    },
    sinopsis: {
        type: String,
    }, 
    url: {
        type: String,
    },
    imagenPelicula: {
        type: String
    },
    anioEstreno: {
        type: String,
    },
    generoPrincipal: {
        type: String,
        ref: 'Genre',
    },
    directorPrincipal: {
        type: String,
        ref: 'Director',
    },
    productora: {
        type: String,
        ref: 'Productora',
    },
    tipo: {
        type: String,
        ref: 'Tipo',
    },
    creadoEn: {
        type: Date,
        default: Date.now
    },
    actualizadoEn: {
        type: Date,
        default: Date.now
    }

});

module.exports = mongoose.model('Media', mediaSchema);