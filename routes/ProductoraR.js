const express = require('express');
const router = express.Router();
const productoraController = require('../controllers/ProductoraC');

router.get('/', productoraController.getAllProductoras);
router.get('/:id', productoraController.getProductoraById);
router.post('/', productoraController.addProductora);
router.put('/:id', productoraController.updateProductora);
router.delete('/:id', productoraController.deleteProductora);

module.exports = router;
