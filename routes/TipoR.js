// Requerimos las librerias
const express = require('express');
const router = express.Router();
const tipoC = require('../controllers/TipoC');


router.get('/', tipoC.getAllTipos);
router.get('/:id', tipoC.getTipoById);
router.post('/', tipoC.addTipo);
router.put('/:id', tipoC.updateTipo);
router.delete('/:id', tipoC.deleteTipo);


module.exports = router;